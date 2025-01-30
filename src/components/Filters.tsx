import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../app/filterSlice.ts';
import { RootState } from '../app/store.ts';

const Filters: React.FC = () => {
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
        Невыполненные
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Выполненные
      </button>
    </div>
  );
};

export default Filters;