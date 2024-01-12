import style from './List.module.scss'
import Item from "./Item";
import { ITask } from '../../types/tasks';

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskLisk}>
      <h2>Daily Studies</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            selectTask={selectTask} 
            {...task} 
            key={task.id} 
          />
        ))}
      </ul>
    </aside>
  )
}

export default List