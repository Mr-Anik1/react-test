import React, { createContext, useReducer } from "react";
import '../../cssFolder/index.css';
import ComponentA from './ComponentA';


const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}

const myContex=createContext();
//contex create korlam

function MainGlobalState(){
    const [count,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
          <h4>Count: {count}</h4>


          {/* Provider dia value set kore dilam */}
          <myContex.Provider value={{myDispatch:dispatch}}>
             <ComponentA/>
          </myContex.Provider>
          
        </div>
    );
}
export default MainGlobalState;
export { myContex };
//myContex ta export kore dilam
