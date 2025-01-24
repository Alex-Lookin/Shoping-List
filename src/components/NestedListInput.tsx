import { INestedListInput } from '../types/types.ts';
import { useState } from 'react';

const NestedListInput = ({ nTasks, setNTasks} : INestedListInput): JSX.Element => {
  const [nTask, setNTask] =useState('');

  const addNTask = () => {
    if(nTask.trim()){  /*Убрать пробелы*/
      setNTasks([...nTasks, { id: Date.now(), text: nTask, completed: false }]);
      setNTask('');
    }
  };

  return(
    <div className='task-input'>
      <input
        type='text'
        placeholder='Введите название...'
        value={nTask}
        onChange={(e) => setNTask(e.target.value)}
      />
      <button onClick={addNTask}>Добавить</button>
    </div>
  );
};

export default NestedListInput;

