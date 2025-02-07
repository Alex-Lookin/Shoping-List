import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../../store/thunk.ts';
import { ITask } from '../../../types/types.ts';
import { getTask } from '../../../store/selector.ts';
import { capitalizeFirstLetter } from '../../../utils';
import { AppDispatch, RootState } from '../../../store/store.ts';
import './taskInputStyle.scss';

export const TaskInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [taskText, setTaskText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const tasks = useSelector((state: RootState) => getTask(state));

  const handleAddTask = () => {
    if (taskText.trim()) {
      const normalizedText = taskText.trim().toLowerCase();
      const isTaskExists = tasks.some((task) => task.text.toLowerCase() === normalizedText);

      if (isTaskExists) {
        setError('Продукт с таким названием уже существует');
        return;
      }

      const capitalizedText = capitalizeFirstLetter(taskText.trim());

      const newTask: ITask = {
        id: Date.now(),
        text: capitalizedText,
        completed: false,
      };

      dispatch(addTask(newTask))
        .then(() => {
          setTaskText('');
          setError('');
        })
        .catch((error) => {
          console.error('Ошибка при добавлении продукта:', error);
          setError('Ошибка при добавления продукта');
        });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const eventButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
    setError('');
  }

  return (
    <div className="task-input">
      <label>
        <input
          type="text"
          placeholder="Введите название продукта"
          value={taskText}
          onChange={eventButtonClick}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button onClick={handleAddTask} disabled={!taskText.trim()}>
        Записать
      </button>
      {error && <p className='style-text'>{error}</p>}
    </div>
  );
};