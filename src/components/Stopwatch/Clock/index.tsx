import style from './Clock.module.scss'

interface Props {
  time: number | undefined;
}

function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minTens, minUnits] = String(minutes).padStart(2, '0');
  const [secTens, secUnits] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.clockNumber}>{minTens}</span>
      <span className={style.clockNumber}>{minUnits}</span>
      <span className={style.clockSeparator}>:</span>
      <span className={style.clockNumber}>{secTens}</span>
      <span className={style.clockNumber}>{secUnits}</span>
    </>
  )
}

export default Clock