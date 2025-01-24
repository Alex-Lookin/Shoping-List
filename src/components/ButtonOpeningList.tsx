import { useState } from 'react';
import NestedList from './NestedList.tsx';
import FiltersCartList from './FiltersCartList.tsx';
import NestedListInput from './NestedListInput.tsx';
import {ButtonOpeningListProps} from '../types/types.ts';


const ButtonOpeningList = ({ nTasks, setNTasks }:ButtonOpeningListProps) => {
  const [isOpening, setIsOpening] = useState<boolean>(true);
  const [cartFilter, setCartFilter] = useState<string>('all');


  const toggleOpening = () => {
    setIsOpening(!isOpening);
  };

  return (
    <>

      <button onClick={toggleOpening}>
        {isOpening ? 'Свернуть' : 'Развернуть'}
      </button>
      {isOpening && (
        <ol>
          <NestedListInput nTasks={nTasks} setNTasks={setNTasks} />
          <FiltersCartList cartFilter={cartFilter} setCartFilter={setCartFilter} />
          <NestedList nTasks={nTasks} setNTasks={setNTasks} cartFilter={cartFilter}/>
        </ol>
      )}
    </>
  );
};

export default ButtonOpeningList;

