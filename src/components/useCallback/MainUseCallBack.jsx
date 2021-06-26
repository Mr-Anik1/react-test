import { useCallback, useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';

/*
  1.
   React.memo() holo ekta higherOrder component.Jesob component
   er re-render amra atkate chaibo React.memo() er moddhe segula
   pass kore dibo.Kivabhe dibo seta <ShowCount/> component e 
   bakkha kora ache!


  

  2.
   useCallback() Hook er maddhome referance type value orthat 
   Function er moto jinish gulor re-rendering atkano jai.
   useCallback() Hook Function er Reference ta mone rakhe Orthat
   Function er Body ta cash kore rakhe.Niche etar sompurno 
   bakkha kora hoice.
    
  
  3.
   useMemo() Hook kono Function er return value ta cash kore 
   rakhe.Costly kono operation korte gele eta babohar korte hoi.
   Erokom:-
           const evenOrOdd=useMemo(()=>{
             let i=0;
             while(i<1000000000) i+=1;//Useless Costly Operation
             return count1 % 2===0;
           },[count1])
          //Dependenchi te count1 deya hoiche.Karon jokhon count1
          er value change hobe tokhon eta kaj korbe.
*/


function MainUseCallBack(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
   
    
    const incrementByone=useCallback(()=>{
      setCount1((prevCount)=>prevCount+1);
    },[])
   /*
     useCallback() er 2 ta parameter thake.Eter First parameter
     e pura Function ta dia dite hobe ar Second parameter e squar
     Bracet e dependenchi dita hobe.

     N.B. Eikhane Dependenchi deyar moto jinish-pati nai tai 
     Blank Squer bracet deya hoiche.
   */
    
    const incrementByFive=useCallback(()=>{
      setCount2((prevCount)=>prevCount+5);
    },[])

    return(
        <div>
          
          <ShowCount title="Count-1"/>
          <h4>{count1}</h4>
          <Button increment={incrementByone}>IncrementByOne</Button>
          <hr/><br/>

          <ShowCount title="Count-2"/>
          <h4>{count2}</h4>
          <Button increment={incrementByFive}>IncrementByFive</Button>

        </div>
    );
}
export default MainUseCallBack;