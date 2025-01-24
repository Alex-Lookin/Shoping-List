import { INestedList } from '../types/types.ts'
import NestedListItem from './NestedListItem.tsx';


const NestedList = ({ nTasks, setNTasks, cartFilter }: INestedList) => {

  const filteredTasks = nTasks.filter((nTask) => {
    if (cartFilter === 'completed') return nTask.completed;
    if (cartFilter === 'active') return !nTask.completed;
    return true;
  });

  return (
    <>
      {filteredTasks.map((nTask) => (
        <NestedListItem key={nTask.id} nTask={nTask} nTasks={nTasks} setNTasks={setNTasks} />
      ))}
    </>
  );
};

export default NestedList;