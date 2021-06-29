import { useReducer } from "react";


//initialState e 2 ta value neya hoice
const initialState={
    value1:0,
    value2:10
}

const reducer=(state,action)=>{
   switch(action.type){
       case 'increment1':
           return {...state,value1:state.value1+action.val};
       case 'decrement1':
           return {...state,value1:state.value1-action.val};
       case 'increment2':
            return {...state,value2:state.value2+action.val};
       case 'decrement2':
            return {...state,value2:state.value2-action.val};
       default:
           return state;
   }
}
/*
   Jehutu initialState e 2 ta value rakha hoice Tai Swich-case e
   return korar somoy spread kore(...state) current state ta nia
   nite hobe.
*/





function DoubleInitialValue(){
    const [count,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
           
             <div>
                 <h4>counter1: {count.value1}</h4>
                 <button onClick={()=>dispatch({
                     type:'increment1',
                     val:1
                 })}>IncrementBy1</button>
                 <button onClick={()=>dispatch({
                     type:'decrement1',
                     val:1
                 })}>DecrementBy1</button>
             </div>


              <div>
                  <h4>counter2: {count.value2}</h4>
                  <button onClick={()=>dispatch({
                     type:'increment2',
                     val:5
                  })}>IncrementBy5</button>
                  <button onClick={()=>dispatch({
                     type:'decrement2',
                     val:5
                  })}>DecrementBy5</button>
              </div>


        </div>
    );
}

export default DoubleInitialValue;