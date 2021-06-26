//Tricky Part of useRef()
import { useEffect, useRef, useState } from "react";

function ButtonRef(){
    const [date,setDate]=useState(new Date());
    const intervalRef=useRef();
    
    const tick=()=>{
        setDate(new Date());
    }

    useEffect(()=>{
        intervalRef.current=setInterval(tick,1000);
        /*
           Eikhane useRef k ekta storage hisabe babohar korlam.
           current er moddhe setInterval() Ta rakhechi.Er fole
           setInterval() ta useEffect() er moddhe block akera
           thakleo eta akhon j kono jaiga theka access korte
           parbo. 
        */


        //cleanup
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    
    return(
        <div>
          <h4>{date.toLocaleTimeString()}</h4>
          <button onClick={()=> clearInterval(intervalRef.current)}>CleanUp</button>
          {/* 
              button er onClick e handelar function hisabe 
              clearInterval() set korechi.Ar clearInterval er 
              moddhe "intervalRef.current" akera uporer 
              setInterval() k access korte parechi ja useRef()
              er Obodan.

              Er fole jokhonei button e click korbo tokhon 
              Interval clear hoia Clock ta stop hoia jabe!
              
          */}
        </div>
    );
}
export default ButtonRef;