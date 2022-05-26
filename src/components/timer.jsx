import React , {useState , useRef ,useEffect} from 'react'

function Timer({time , interval = 1000 , onEnd}) {
const [internalTime, setInternalTime] =useState(time)
const timerRef = useRef(time)
useEffect(()=>{
    if (internalTime === 0 && onEnd) onEnd()},
    [internalTime , onEnd])
useEffect(() => {
    timerRef.current = 
    setInterval(
        () =>
        setInternalTime(timerRef.current -= interval), 
        interval)
    return() =>{
        clearInterval(timerRef.current)}},[interval])
  return (
    <span className="timer">{`Time: ${internalTime /1000}s`}</span>
  )
}

export default Timer