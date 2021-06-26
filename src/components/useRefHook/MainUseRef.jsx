import { useEffect, useRef } from "react";
import ForWardedInput from './AnotherInput';
import ButtonRef from './ButtonRef';


function MainUseRef(){
    
    const inputRef=useRef();
    /*
       React er component ta jokhon render hobe tokhon se 
       useRef() Hook/Function ti k store kore rakha "inputRef" er
       moddhe ekta placeholder toiri korbe.Tarpor se dekbhe ei
       "inputRef" er sathe somporko kon document field ba DOM 
       Element er.Eropr React korbe ki oi document field(DOM
       Element) ta "inputRef" er current namok property er 
       moddhe dia dibe.
    */

    useEffect(()=>{
      inputRef.current.focus();
    },[])
    /*
       Amader lokkho chilo jokhon Browser ta run hobe tokhon 
       Mouse Cursor ta Input box e automtic thakbe.

       DOM er kono element k Focus korte hole focus() Function ta
       call korte hoi.Jehutu Upore dekhaichi Amader DOM Element 
       ta "current" property er moddhe royeche tai focus Function
       ta current er pashe dot(.) dia call korte hobe.Taholei 
       Mouse Cursor ta input box e focus hoia thakbe.
       
    */

    return(
        <div>
          <input ref={inputRef} type="text" placeholder="Input Something"/><br/>
          <hr/><br/>

          <ForWardedInput ref={inputRef} type="text" placeholder="Enter Your Name"/><br/><br/><br/>
          
          {/*Button Timer Component*/}
          <ButtonRef/>

        </div>
    );
}
export default MainUseRef;