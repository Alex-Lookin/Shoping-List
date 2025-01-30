import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import TaskItem from './TaskItem';
import { ITask } from '../types/types';

interface TaskListProps {
  filter: string;
}

const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

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

export default TaskList;