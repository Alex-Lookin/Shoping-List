import { ITaskItemProps } from '../types/types.ts';


/*TaskItem отвечает за отображение одного элемента задачи в списке дел*/
const TaskItem = ({ task, tasks, setTasks }: ITaskItemProps) => {

  /*toggleCompletion Отвечает за переключение состояния выполнения задачи (отметить как выполненную/невыполненную).*/
  const toggleCompletion = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };
  /*Отвечает за удаление текущей задачи*/
  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className='wrapper-list'>
        <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompletion}
        />
        <span>{task.text}</span>
        <button onClick={deleteTask}>Передумать</button>
      </label>
    </li>
  );
};

export default TaskItem;
