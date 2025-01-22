export interface ITask {
  id: number;
  text: string;
  completed: boolean;
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
  filter: string
}