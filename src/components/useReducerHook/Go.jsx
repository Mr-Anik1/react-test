import { useReducer } from "react";


//initialState e value Object akare deya ache
const initialState={
    value:0,
}

const reducer=(state,action)=>{
   switch(action.type){
   /*
     action[Eikhane onClick er dispatch] ta Object akare ache.
     action e type namok ekta property ache seta access korar
     jonno action.type deya hoice.
   */
       case 'increment':
           return {value:state.value+action.val}
           /*
              Jehutu initialState e value Object akare ache tai
              oi value ta k access korar jonno state.value dite 
              hobe.

              Aber amra chacchi action e j val deya ache seta 
              onujai increment hobe, Tai action.val diyechi
           */
       default:
           return state;
   }
}




function Go(){
    const [count,dispatch]=useReducer(reducer,initialState)

    return(
       
          <div>
            <h2>{count.value}</h2>
            <button onClick={()=>dispatch({
                type:'increment',
                val:3
            })}>IncrementBy3</button>
            <button onClick={()=>dispatch({
                type:'increment',
                val:5
            })}>IncrementBy5</button>
            {/*dispatch er moddhe value default Vabe set kore
              dichi.Fole jokhon j Button e click korbe tokhon oi
              khaner value onujai Increment hobe.
            */}
          </div>
    
    );
}
export default Go;