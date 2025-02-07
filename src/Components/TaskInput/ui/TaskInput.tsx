import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../../store/thunk.ts';
import { ITask } from '../../../types/types.ts';
import { getTask } from '../../../store/selector.ts';
import { capitalizeFirstLetter } from '../../../utils';
import './taskInputStyle.scss';

export const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState(''); // Состояние для ошибки

  // Получаем текущий список задач из состояния Redux
  const tasks = useSelector(getTask);

  const handleAddTask = () => {
    if (taskText.trim()) {
      // Приводим текст задачи к нижнему регистру для проверки на дубликаты
      const normalizedText = taskText.trim().toLowerCase();

      // Проверяем, существует ли задача с таким же названием (игнорируя регистр)
      const isTaskExists = tasks.some((task) => task.text.toLowerCase() === normalizedText);

      if (isTaskExists) {
        setError('Продукт с таким названием уже существует');
        return; // Прерываем выполнение функции
      }

      // Преобразуем первую букву текста задачи в верхний регистр
      const capitalizedText = capitalizeFirstLetter(taskText.trim());

      const newTask: ITask = {
        id: Date.now(), // Используем временную метку для уникального id
        text: capitalizedText, // Используем текст с первой заглавной буквой
        completed: false,
      };

      // Синхронный вызов dispatch (если возможно)
      dispatch(addTask(newTask))
        .then(() => {
          setTaskText(''); // Очищаем поле ввода
          setError(''); // Очищаем сообщение об ошибке
        })
        .catch((error) => {
          console.error('Ошибка при добавлении продукта:', error);
          setError('Ошибка при добавлении продукта');
        });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask(); // Вызываем функцию добавления задачи
    }
  };

  return (
    <div className="task-input">
      <label>
        <input
          type="text"
          placeholder="Введите название задачи"
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            setError(''); // Очищаем ошибку при изменении текста
          }}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button onClick={handleAddTask} disabled={!taskText.trim()}>
        Создать
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображаем ошибку */}
    </div>
  );
};