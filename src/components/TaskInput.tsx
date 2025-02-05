import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../app/tasksAPI.ts';
import { ITask } from '../types/types.ts';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleAddTask = async () => {
    if (taskText.trim()) {
      const newTask: ITask = {
        id: 1,
        text: taskText,
        completed: false
      };
      try {
        await dispatch(addTask(newTask)); // Ожидаем завершения асинхронной операции
        setTaskText('');
      } catch (error) {
        // Обработка ошибок при добавлении задачи
        console.error('Ошибка при добавлении задачи:', error);
        // Можно вывести сообщение об ошибке пользователю
      }
    }
  };

  return (
    <label className="task-input">
      <input
        type="text"
        placeholder="Введите название задачи"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Создать</button>
    </label>
  );
};

export default TaskInput;