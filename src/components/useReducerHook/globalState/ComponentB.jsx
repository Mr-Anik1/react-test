import { useContext } from 'react';
import { myContex } from './MainGlobalState';

function ComponentB(){
    const countContex=useContext(myContex);
    /*
       useContex() babohar kore "Consumer" er kajta korlam.
       Fole ekhon ar kosto kore consumer babohar korte hobe na!
       
       countContex namok variable e useContex() rakhechi abong
       useContex() er moddhe <MainGlobalState/> thekhe import 
       kora myContex dhukia dichi.Fole Eikhaner "countContex"
       automatic "myContex" er value {myDispatch:dispatch} eta
       peya jabe.
    */

    return(
        <div>
        
          <button onClick={()=>countContex.myDispatch('increment')}>Increment</button>
          <button onClick={()=>countContex.myDispatch('decrement')}>Decrement</button>
          {/* 
             Amra er age dispatch er moddhe increment/decrement 
             rakhe state change er kajta kortam.
             Eirokom:-
                  <button onClick={()=>dispatch('decrement')}>Decrement</button>

             
             Jehutu "myContex" er value [ekta Object]
             {myDispatch:dispatch} "countContex" peya geche,tai 
             Ekhon "countContex" er ekta property "myDispatch"
             er moddhe "dispatch" ta ache.
             Tai onClick e countContex.myDispatch dile "dispatch"
             er kajta hoia jabe.Ar state change er kajta khub 
             sundor vabe hoia jabe.

          */}

                        
        </div>
    );
}
export default ComponentB;