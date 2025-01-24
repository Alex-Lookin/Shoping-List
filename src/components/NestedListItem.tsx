import { INestedListItemProps } from '../types/types.ts';



/*TaskItem отвечает за отображение одного элемента задачи в списке дел*/
const NestedListItem = ({ nTask, nTasks, setNTasks }: INestedListItemProps) => {
  /*toggleCompletion Отвечает за переключение состояния выполнения задачи (отметить как выполненную/невыполненную).*/
  const toggleCompletion = () => {
    setNTasks(
      nTasks.map((t) =>
        t.id === nTask.id ? { ...t, completed: !t.completed } : t
      )
    );
  };
  /*Отвечает за удаление текущей задачи*/
  const deleteTask = () => {
    setNTasks(nTasks.filter((t) => t.id !== nTask.id));
  };

  return (
    <li className={`task-item ${nTask.completed ? 'completed' : ''}`}>
      <label className='wrapper-list'>
        <input
        type="checkbox"
        checked={nTask.completed}
        onChange={toggleCompletion}
        />
        <span>{nTask.text}</span>
        <button onClick={deleteTask}>Удалить</button>
      </label>
    </li>
  );
};

export default NestedListItem;
