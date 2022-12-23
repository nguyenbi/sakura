import { useState, useRef } from "react"

 
 function UseRefOverview(){
  const [state, setstate] = useState(90);
  var idInter  = useRef();
 
  const HandleStart = () =>{
     idInter.current = setInterval(()=>{
        setstate(state => state-1)
     },1000)
  }
  
  const HandleStop =() =>{
    clearInterval(idInter.current)
  }

    return (
        <div>
            <h2>{state}</h2>
            <button onClick={HandleStart}>Start</button>
            <button onClick={HandleStop}>Stop</button>
        </div>
    )
 }

 export default UseRefOverview