import { useReducer } from "react";



//BoilerPlate
const initialState=0;
/*
  initialState 0 dia suru korechi tai count 0 thekhe shuru hobe.
  Jdi initialState=10 ditam tahole count 10 thekhe suru hoto!
*/
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



function CounterReduce(){
    const [count,dispatch]=useReducer(reducer,initialState);

    const incrementClick=()=>{
        dispatch('increment');
    }
    /*
       Amra jokhon Button e click kori seta ekta action.Eikhane
       dispatch() er moddhe upore toiri kora BoilerPlate er ekti
       case 'increment' dia dilam.Ekhon jokhon increment Button
       e click korbo tokhon Increment hobe.
    */
    

    return(
        <div>
            <h4>Count-{count}</h4>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            {/*Eikhane Direct dispatch nia kaj korte pari*/}

            <button onClick={incrementClick}>Increment</button>
        </div>
    );
}
export default CounterReduce;