import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITask } from '../types/types.ts';

const API_URL = 'https://679bf67833d316846325a3e8.mockapi.io/tasks';



export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch(error) {
    console.log(error);
    return { message: '\'Произошла ошибка при загрузке данных с сервера. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу'};
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async (newTask: ITask) => {
  try {
    const response = await axios.post(API_URL, newTask);
    return response.data;
  } catch {
    return alert('Произошла ошибка при отправке данных на сервер. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (updatedTask: ITask) => {
  try {
    const response = await axios.put(`${API_URL}/${updatedTask.id}`, updatedTask);
    return response.data;
  } catch {
    return alert('Произошла ошибка при отправке данных на сервер. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: number) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
    return taskId;
  } catch {
    return alert('Произошла ошибка при обработке данных с сервер. Пожалуйста, проверьте ваше подключение к интернету и обновите страницу');
  }
});