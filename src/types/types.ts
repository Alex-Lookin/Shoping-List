import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store.ts';

export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITitleHeaderProps {
  title: string;
}

export interface IFiltersProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITaskInputProps {
  tasks: ITask[] | [];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface ITaskItemProps {
  task: ITask;
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
}

export interface ITaskListIProps {
  tasks: ITask[] | [];
  setTasks: (tasks: ITask[]) => void;
  filter: string;
}



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()