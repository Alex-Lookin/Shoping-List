import { useState } from 'react';
import Header from './components/header.tsx';
import TaskInput from './components/TaskInput.tsx';
import Filters from './components/Filters.tsx';
import TaskList from './components/TaskList.tsx';



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState<string>('all');

  return(
    <div className="app">
      <Header title='Shopping List'/>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <Filters filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
};

export default App;