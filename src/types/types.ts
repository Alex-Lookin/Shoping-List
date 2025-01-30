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


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()