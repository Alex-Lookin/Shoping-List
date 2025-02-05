import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store.ts';
import {TaskItem} from '../TaskItem/';
import { ITask } from '../../../types/types.ts';
import { fetchTasks } from '../../../app/tasksAPI.ts';

interface TaskListProps {
  filter: string;
}

export const TaskList = ({ filter }: TaskListProps) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter((task: ITask) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <>
      {filteredTasks.map((task: ITask) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
