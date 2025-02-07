import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITask } from '../types/types.ts';
import { AppDispatch, RootState } from './store.ts';

const API_URL = 'https://679bf67833d316846325a3e8.mockapi.io/tasks';

export const fetchTasks = createAsyncThunk<ITask[], void, { state: RootState; dispatch: AppDispatch }>(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch(error) {
    console.error(error);
    return rejectWithValue('Произошла ошибка при получении данных на сервер. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});

export const addTask = createAsyncThunk<ITask, ITask, { state: RootState; dispatch: AppDispatch }>(
  'tasks/addTask',
  async (newTask: ITask, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, newTask);
    return response.data;
  } catch(error) {
    console.error(error);
    return rejectWithValue('Произошла ошибка при отправке данных на сервер. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});

export const updateTask = createAsyncThunk<ITask, ITask, { state: RootState; dispatch: AppDispatch }>(
  'tasks/updateTask',
  async (updatedTask: ITask, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
    return response.data;
  } catch(error) {
    console.error(error);
    return rejectWithValue('Произошла ошибка при отправке данных на сервер. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});

export const deleteTask = createAsyncThunk<number, number, { state: RootState; dispatch: AppDispatch }>(
  'tasks/deleteTask', async (taskId, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
    return taskId;
  } catch (error) {
    console.error(error);
    return rejectWithValue('Произошла ошибка при обработке данных с сервера. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});