import { ITask, ITaskItemProps } from '../types/types.ts';
// import NestedListInput from './NestedListInput.tsx';
import { useState } from 'react';
// import NestedList from './NestedList.tsx';
// import FiltersCartList from './FiltersCartList.tsx';
import ButtonOpeningList from './ButtonOpeningList.tsx'


/*TaskItem отвечает за отображение одного элемента задачи в списке дел*/
const TaskItem = ({ task, tasks, setTasks }: ITaskItemProps) => {
  const [nTasks, setNTasks] = useState<ITask[] | []>([]);
  // const [cartFilter, setCartFilter] = useState<string>('all');
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
        <button onClick={deleteTask}>Удалить</button>
      </label>
      {/*<NestedListInput nTasks={nTasks} nSetTasks={nSetTasks} />*/}
      {/*<FiltersCartList cartFilter={cartFilter} setCartFilter={setCartFilter}/>*/}
      <ButtonOpeningList nTasks={nTasks} setNTasks={setNTasks}/>
      {/*<ol className="NestedList">*/}
      {/*  <NestedList nTasks={nTasks} nSetTasks={nSetTasks} cartFilter={cartFilter}/>*/}
      {/*</ol>*/}
    </li>
  );
};

export default TaskItem;
