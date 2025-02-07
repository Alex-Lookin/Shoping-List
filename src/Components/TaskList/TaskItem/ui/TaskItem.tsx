import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../../../../store/thunk.ts';
import { TaskItemProps } from '../../../../types/types.ts';
import { AppDispatch } from '../../../../store/store.ts';
import './taskItemStyles.scss';

export const TaskItem = ({ task } : TaskItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleComplete = () => {
    const updatedTask = {
      ...task,
      completed: !task.completed,
    };
    dispatch(updateTask(updatedTask));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="wrapper-list">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
        />
        <span className="task-text">{task.text}</span>
        <button className='delete-btn' onClick={handleDeleteTask}>Дождусь акции</button>
      </label>
    </li>
  );
};