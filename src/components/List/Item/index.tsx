import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void
}

function Item({ name, time, selected, completed, id, selectTask }: Props) {
  return (
    <li 
      className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`} 
      onClick={() => !completed && selectTask({
        name,
        time,
        selected,
        completed,
        id
      })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && 
        <span aria-label='completed task' className={style.completed}/>}
    </li>
  )
}

export default Item