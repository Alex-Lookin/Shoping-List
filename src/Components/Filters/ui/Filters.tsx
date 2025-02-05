import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../app/filterSlice.ts';
import { RootState } from '../../../app/store.ts';
import { IFilterButtonProps } from '../../../types/types.ts'


export const Filters: React.FC<IFilterButtonProps> = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.filter);

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
