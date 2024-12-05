import React from 'react'
import {useState} from 'react'
const Stopwatch = () => {
    const [isRunning,setIsRunning]=useState(false)
    const [time,setTime] = useState(0);
    function handleStartStop(){
        setIsRunning((pre)=>!pre)
    }
    function handleRestart(){
       setTime(0);
       setIsRunning(false);
    }
    useEffect(()=>{
      if(isrunning){
        setInterval(()=>{
          setTime((time)=>(time+1))
        },1000)
      }
      return 
    })
  return (
    <div>
      <h1>StopWatch App</h1>
      <h1>Timer:</h1>
      <button onClick={handleStartStop}>{isRunning? 'Stop':'Start'}</button>
      <button onClick ={handleRestart}>Reset</button>
      <button>Reset</button>
    </div>
  )
}

export default Stopwatch
