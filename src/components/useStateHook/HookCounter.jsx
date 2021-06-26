import { useState } from "react";

function HookCounter(){
    const [count,setCount]=useState(0);

    const clickHandler=()=>{
        setCount((prevState)=>(prevState+1));
    }

    return(
        <div>
          <h4>{count}</h4>
          <button value={count} onClick={clickHandler}>Clicked {count} Times</button>
        </div>
    );
}
export default HookCounter;