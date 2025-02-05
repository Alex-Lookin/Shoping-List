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

export interface TaskItemProps {
  task: ITask;
}

export interface ITasksState {
  tasks: ITask[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface IFilterButtonProps {
  filter: string;
  activeFilter: string;
  onClick: () => void;
}


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()