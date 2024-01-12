import { useEffect, useState } from 'react';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';
import { timeToSec } from '../../utils/convertTime';

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

function Stopwatch({selected, endTask}: Props) {
  
  const [time, setTime] = useState<number>();
  
  useEffect(() => {
    if(selected?.time){
      setTime(timeToSec(selected.time))
    }
  }, [selected])
  
  function counterdown(counter: number = 0) {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1);
        return counterdown(counter - 1)
      }
      endTask();
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Select a card and start the stopwatch!</p>
      <div className={style.clockWrapper}>
        <Clock time={time}/>
      </div>
      <Button onClick={() => counterdown(time)}>Start!</Button>
    </div>
  )
}

export default Stopwatch