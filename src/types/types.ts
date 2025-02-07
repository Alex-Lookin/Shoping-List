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

export interface TaskListProps {
  filter: string;
}