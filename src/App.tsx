import Header from './components/Header.tsx';
import TaskInput from './components/TaskInput.tsx';
import Filters from './components/Filters.tsx';
import TaskList from './components/TaskList.tsx';
import { RootState } from './app/store.ts';
import {  useSelector } from 'react-redux';
// import './styles/globals.scss'


const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.filter.filter);

  return(
    <>
      <Header title = 'Shopping List' />
      <main className="app">

        <TaskInput />
        <Filters />
        <ul className="task-list">
          <TaskList tasks={tasks} filter={filter} />

        </ul>


      </main>
    </>
  );
};
export default App;