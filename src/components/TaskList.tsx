import {ITaskListIProps} from '../types/types.ts'
import TaskItem from './TaskItem.tsx';


const TaskList = ({ tasks, setTasks, filter }: ITaskListIProps) => {

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;