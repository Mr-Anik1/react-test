//Functional Way
/*
   function BoilingVerdit({celsius}){
      if(celsius>=100){
         return <h4>Water would boiled</h4>
      }else if(celsius<100){
        return <h4>water would not boiled</h4>
      }else{
        return <h4>Something is wrong.Try again!</h4>
      }
    }
    export default BoilingVerdit;
*/



//Class Way
import React from 'react';
import '../cssFolder/index.css';

export default class BoilingVerdit extends React.Component{
//Erokom Ekline e export default kora jai!    
    render(){
        const {celsius}=this.props;
        
        if(celsius>=100){
            return <h4>Water would boiled</h4>
        }else if(celsius<100){
            return <h4>water would not boiled</h4>
        }else{
            return <h4>Something is wrong.Try again!</h4>
        }
    }
}