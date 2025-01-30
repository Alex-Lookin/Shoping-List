import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../app/tasksSlice.ts';

/*TaskItem отвечает за отображение одного элемента задачи в списке дел*/
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleTask(task.id));
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
          onChange={handleToggleCompletion}
        />
        <span>{task.text}</span>
        <button onClick={handleDeleteTask}>Удалить</button>
      </label>
    </li>
  );
};

export default TaskItem;