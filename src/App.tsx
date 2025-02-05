import { Header } from './Components/Header/';
import { TaskInput } from './Components/TaskInput/';
import { Filters } from './Components/Filters/'
import { TaskList } from './Components/TaskList/';
import { RootState } from './app/store.ts';
import {  useSelector } from 'react-redux';
// import './styles/globals.scss'


const App = () => {
  const filter = useSelector((state: RootState) => state.filter.filter);

  return (
    <>
      <Header title="Shopping List" />
      <main className="app">
        <TaskInput />
        <Filters
          filter={''}
          activeFilter={''}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <ul className="task-list">
          <TaskList filter={filter} />
        </ul>
      </main>
    </>
  );
};
export default App;