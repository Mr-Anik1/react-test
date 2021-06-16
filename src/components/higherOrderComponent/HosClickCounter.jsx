import React from 'react';
import WithCounter from './HOC/WithCounter';
/*
  Code duplication komanor jonno je "WithCounter" namok higher order component toiri korchilam seta eikhane import kore dilam.
*/


//HosClickCounter namok ekta component toiri korlam
class HosClickCounter extends React.Component{
  render(){
    const {count,incrementCount}=this.props;
    return(
      <div>
        <button onClick={incrementCount}>Clicked {count} Times</button>
      </div>
    );
  }
}
export default WithCounter(HosClickCounter);
/*
   Amra jani Higher Order component tar parameter e ekta component ney.Tai amader import kora "withCounter" namok higher order component e Eikhane toire kora "HosClickCounter" component ta dia dilam.
*/
