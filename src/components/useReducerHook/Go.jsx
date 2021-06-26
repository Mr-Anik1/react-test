import { useReducer } from "react";


//initialState e value Object akare ache
const initialState={
    value:0,
}

const reducer=(state,action)=>{
   switch(action){
       case 'increment':
           return {value:state.value+1}
           /*
              Jehutu initialState e value Object akare ache tai
              oi value ta k access korar jonno state.value dite 
              hobe.
           */
       default:
           return state;
   }
}

function Go(){
    const [count,dispatch]=useReducer(reducer,initialState)

    const handelClick=()=>{
      dispatch('increment')
    }
    return(
        <div>
           <h2>{count.value}</h2>
           <button onClick={handelClick}>Increment</button>
        </div>
    );
}
export default Go;