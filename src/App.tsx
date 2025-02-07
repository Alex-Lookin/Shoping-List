import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/';
import { TaskInput } from './Components/TaskInput/';
import { Filters } from './Components/Filters/';
import { TaskList } from './Components/TaskList/';
import { useSelector } from 'react-redux';
import { HomePage} from './Components/HomePage';
import { NotFoundPage } from './Components/NotFoundPage/';
import { getFilter } from './store/selector.ts'
import './styles/globals.scss';

const App = () => {
  const filter = useSelector(getFilter)

return (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header title="Shopping List" />
            <HomePage />
          </>
        }
      />
      <Route
        path="/tasks"
        element={
          <>
            <Header title="Shopping List" />
            <main className="app">
              <TaskInput />
              <Filters
                filter={''}
                activeFilter={''}
                onClick={() => {
                  throw new Error('Функция не сработала');
                }}
              />
                <TaskList filter={filter} />
            </main>
          </>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);
};

export default App;