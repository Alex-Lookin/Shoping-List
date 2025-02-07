import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice.ts';
import tasksReducer from './tasksSlice.ts';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: tasksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch