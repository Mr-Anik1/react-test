import { useEffect, useState } from "react";
/*
   useEffect() hook er vibinno kaj:-

   1.useEffect() function er shesh e jdi kono Squer Bracet
   na deya hoi tahole setar vitorer function ta bar bar run hobe.
   Orthat Jokhoney amader component ta render hobe tokhonei 
   useEffect() er vitorer Function ta run hobe!
   Erokom:- 
            useEffect(()=>{
             document.title=`Clicked ${count} Times`;
            })
            //Shesh e kono Squer Bracet [] Nai.




    2.useEffect() Function er shesh e jdi Blank Squer Bracet[]
    deya hoi tahole seta shudhu ekbar run hobe.Orthat seta
    componentDidMount() lifecycle er moto kaj korbe.
    Erokom:-
             
            useEffect(()=>{
              const interval=setInterval(tick,1000);
            },[])
            //Shesh e Blank Squer Bracet ache.


    
    

    3.useEffect() Function er shesh e Squer Bracet er moddhe jdi 
    kono dependenchi deya hoi tokhon useEffect() er vitorer 
    Function ta ukto dependenchi onujai run hobe.
    Erokom:-
            
             useEffect(()=>{
               console.log(`${count}.Updating Document title`);
               document.title=`Clicked ${count} Times`;
             },[count])
    
    Eikhane useEffect() er shesh e Squer Bracet e dependenchi
    hishabe "count" deya hoice.Jokhon count er value change hobe 
    shudhu tokhonei useEffect() er vitorer function ta run hobe.
    Tachara onno somoy ar run hobe na.
  



            
    4.useEffect() Function jdi arekta Function return kore
    tokhon seta componentWillUnmount() lifecycle method er moto
    kaj kore.Er Moddhe amra clearInterval() set korte pari.
    Erokom:-

           useEffect(()=>{
               const interval=setInterval(tick,1000);
            
               //Arekta Function return korechi
                return ()=>{
                  clearInterval(interval)
                } 
         
            },[])


*/



function MyUseEffect(){
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date());

    const tick=()=>{
        setDate(new Date());
    }

    const handelClick=()=>{
       setCount((prevState)=>prevState+1);
    }


    useEffect(()=>{
       console.log(`${count}.Updating Document title`);
       document.title=`Clicked ${count} Times`;
    },[count])
     /*
      useEffect() holo erokom ekti Function Jeta parameter
      hishabe ney arekti Function.Ar er gurroto purno boishisto
      holo Jokhonei amader component ta render hobe tokhon 
      useEffect() er vitorer Function ta run hobe.Orthat every render e vitorer Function ta run hobe.

      useEffect() call korbo ki korbo na seta useEffect er shesh
      e j Squer Bracet [] diyachi sekhane bola jay.
      Jamon eikhane [] er vitore bole diche Jokhon count er value change hobe shudhu tokhonei useEffect() er vitorer 
      function ta run hobe.Onnothay hobe na!

      N.B. Squer Bracet er moddhe ekadik dependenchi likha jai.
      [count,go,ho,no] erokom ekadhik.
    */

     

    useEffect(()=>{
        const interval=setInterval(tick,1000);


       
        //Do the cleanup - stop the timer
        return ()=>{
            clearInterval(interval)
        }
         /*
           Timer set korlei hobe na etar interval clear o korte
           hobe.tar jonnoi eikhane clearInterval() set korechi.

           useEffect() Function jdi arekta Function return kore 
           tokhon seta componentWillUnmount() lifecycle method
           er moto kaj kore.
        */
    },[])
    /*
      useEffect() er sheshe jdi shudhu blank [] dei tokhon eta 
      shudhu ekbar run hobe.Orthat componentDidMount() lifecycle
      er moto kaj korbe.


      N.B. useEffect() hook ta etotai karjokari j eta 
      componentDidMount() & componentWillUnmount() er kaj ekai
      korte pare!
    */



    return(
        <div>
           <h4>Time:{date.toLocaleTimeString()}</h4>
           <button onClick={handelClick}>Click</button>
        </div>
    );
}
export default MyUseEffect;