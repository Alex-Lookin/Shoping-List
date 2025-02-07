import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store.ts';
import { TaskItem } from '../TaskItem/';
import { ITask } from '../../../types/types.ts';
import { fetchTasks } from '../../../store/thunk.ts';
import { Link } from 'react-router-dom';
import './taskListStyles.scss';
import { TaskListProps } from '../../../types/types.ts';
import { getTask } from '../../../store/selector.ts';

export const TaskList = ({ filter }: TaskListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(getTask);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task: ITask) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <ul className="task-list">
      {filteredTasks.map((task: ITask) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <Link to="/">
        <button className="back-btn">Закончить покупки</button>
      </Link>
    </ul>
  );
};
