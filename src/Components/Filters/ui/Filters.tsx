import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/filterSlice.ts';
import { IFilterButtonProps } from '../../../types/types.ts';
import { getFilter } from '../../../store/selector.ts';
import './filtersStyle.scss';
import { AppDispatch } from '../../../store/store.ts';



export const Filters: React.FC<IFilterButtonProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector(getFilter);

  return (
    <div className="filters">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => dispatch(setFilter('all'))}
      >
        Все
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => dispatch(setFilter('active'))}
      >
        Нужно купить
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Уже в корзине
      </button>
    </div>
  );
};
