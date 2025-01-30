import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../app/tasksSlice.ts';
import { ITask } from '../types/types.ts';



const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask: ITask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTaskText('');
    }
  };

  return (
    <label className="task-input">
      <input
        type="text"
        placeholder="Введите название списка"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Создать</button>
    </label>
  );
};

  export default TaskInput;