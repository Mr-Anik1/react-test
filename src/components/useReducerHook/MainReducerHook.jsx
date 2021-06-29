/*
  1.
   useReducer() Hook parameter e 2 ta jinis ney.Prothom ta ekta 
   Function[eikhane reducer] ar 2nd ta initialState.
   Erokom-
          useReducer(reducer,initialState)

   reducer() Function ta aber parameter e 2 ta jinis ney.Prothom
   ta "curretState" ar 2nd ta ekta "action".Click,Hover eigula 
   ek ek ta action.
   Erokom-
          reducer(currentState,action)



  2.
   useReducer() Hook return kore ekta tuple-[newState,dispatch]
   Orthat prothom parameter e notun State ta ney ar 2nd parameter
   e dispatch namok ekta Function ney.dispatch amader state ta k
   change korte help korbe.Eta muloto useState(count,setCount)
   e deya 2nd parameter er moto.Orthat "setState" er kajta korbe.

*/

import '../cssFolder/index.css';
import CounterReduce from './CounterReduce';
import DoubleInitialValue from './DoubleInitialValue';
import MainGlobalState from './globalState/MainGlobalState';
import Go from './Go';


function MainReducerHook(){
    return(
        <div>
            <CounterReduce/><br/><br/>
            <Go/><br/><br/><br/>
            <DoubleInitialValue/><br/><br/><br/><br/><br/>

            {/* For GlobalState Example */}
            <h4>Global State Example</h4>
            <MainGlobalState/>
        </div>
    );
}
export default MainReducerHook;