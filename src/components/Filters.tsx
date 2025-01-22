import {IFiltersProps} from '../types/types.ts';

const Filters = ({ filter, setFilter }: IFiltersProps) => {
  return (
    <div className="filters">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        Все
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Невыполненные
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Выполненные
      </button>
    </div>
  );
};

export default Filters;