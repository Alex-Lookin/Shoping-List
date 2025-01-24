import {IFiltersCartList} from '../types/types.ts';

const FiltersCartList = ({ cartFilter, setCartFilter }: IFiltersCartList) => {
  return (
    <div className="CartFilters">
      <button
        className={cartFilter === 'all' ? 'active' : ''}
        onClick={() => setCartFilter('all')}
      >
        Весь список
      </button>
      <button
        className={cartFilter === 'active' ? 'active' : ''}
        onClick={() => setCartFilter('active')}
      >
        Осталось купить
      </button>
      <button
        className={cartFilter === 'completed' ? 'active' : ''}
        onClick={() => setCartFilter('completed')}
      >
        Уже в корзине
      </button>
    </div>
  );
};

export default FiltersCartList;