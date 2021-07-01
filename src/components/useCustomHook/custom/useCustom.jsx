import { useCallback, useEffect, useState } from "react";

function CustomHook(size){
    
    const [smallScreen,setSmallScreen]=useState(false);


    const checkScreenSize=useCallback(()=>{
        setSmallScreen(window.innerWidth<size);
    },[size])

   /*
     Jehutu baire theke size niyechi tai useCallBack() er
     Dependencchi te size dita hoyecha.

     Amra jani referance type jinispati(like:Function) er
     re-rendering atkanor jonno useCallback() babohar korte hoi
     Jehutu screen boro choto korle protibar "checkScreenSize"
     call hobe karon "checkScreenSize" function ta nicha
     useEffect() hook e babohar kora hoice.
       
     Tai er re-rendering atkano joruri.Thik ei karone
     useCallback() babohar kora hoice.
   */




    
      
   /*
     Baire theke size na bole dila ei rokom kora jeto:-

       const checkScreenSize=()=>{
          setSmallScreen(window.innerWidth<size);
       }

     Prothom e amader "smallScreen" ta useState e false set
     korachi.Erpor checkScreenSize namok ekta function niyechi
     abong state change korar jonno setSmallScreen call kore
     tar vitor check korachi window ta 768px er nicha hole
     "smallScreen" ta true hoia jabe!
   */


  

    useEffect(()=>{
       checkScreenSize();
       window.addEventListener("resize",checkScreenSize);

       return ()=>window.removeEventListener("resize",checkScreenSize);

    },[checkScreenSize])
    /*
     Jehutu baire theke "checkScreenSize" niyechi tai
     useEffect() er Dependencchi te "checkScreenSize" dita
     hoyecha.
   */

    return smallScreen;

}
export default CustomHook;