import { useState } from 'react';
import Header from './components/header.tsx';
import TaskInput from './components/TaskInput.tsx';
import Filters from './components/Filters.tsx';
import TaskList from './components/TaskList.tsx';
import {ITask} from './types/types.ts';



const App = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [filter, setFilter] = useState<string>('all');


  return(
    <>
      <Header title='Shopping List' />
      <main className="app">

        <TaskInput tasks={tasks} setTasks={setTasks} />
        <Filters filter={filter} setFilter={setFilter} />
        <ul className="task-list">
          <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />

        </ul>


      </main>
    </>
  );
};

export default App;