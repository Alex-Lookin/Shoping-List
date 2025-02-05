import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../../../../app/tasksAPI.ts';
import { TaskItemProps } from '../../../../types/types.ts';


/*TaskItem отвечает за отображение одного элемента задачи в списке дел*/
export const TaskItem = ({ task } : TaskItemProps) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    const updatedTask = {
      ...task,
      completed: !task.completed, // Переключаем состояние completed
    };
    dispatch(updateTask(updatedTask)); // Передаем обновленный объект задачи
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="wrapper-list">
        <input
          type="checkbox"
          checked={task.completed} // Исправлено: используем значение свойства completed
          onChange={handleToggleComplete}
        />
        <span>{task.text}</span>
        <button onClick={handleDeleteTask}>Удалить</button>
      </label>
    </li>
  );
};