import {ITaskInputProps} from '../types/types.ts';
import {useState} from 'react';



const TaskInput = ({ tasks, setTasks} : ITaskInputProps): JSX.Element => {
    const [task, setTask] =useState('');

const addTask = () => {
  if(task.trim()){  /*Убрать пробелы*/
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  }
};

  return(
    <label className='task-input'>
      <input
        type='text'
        placeholder='Введите название...'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Добавить</button>
    </label>
    );
  };

  export default TaskInput;