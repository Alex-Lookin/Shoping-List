import React from 'react';

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

export interface IFiltersCartList{
  cartFilter: string;
  setCartFilter: React.Dispatch<React.SetStateAction<string>>;
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

export interface INestedListItemProps {
  nTask: ITask;
  nTasks: ITask[];
  setNTasks: (tasks: ITask[]) => void;
}

export interface ITaskListIProps {
  tasks: ITask[] | [];
  setTasks: (tasks: ITask[]) => void;
  filter: string;
}

export interface INestedList {
  nTasks: ITask[] | [];
  setNTasks: (tasks: ITask[]) => void;
  cartFilter: string;
}

export interface INestedListInput {
  nTasks: ITask[] | [];
  setNTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export interface ButtonOpeningListProps {
  nTasks: ITask[];
  setNTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
