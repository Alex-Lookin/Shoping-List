import { RootState } from './store.ts';

export const getFilter =(state: RootState) => state.filter.filter;
export const getTask= (state: RootState) => state.tasks.tasks;