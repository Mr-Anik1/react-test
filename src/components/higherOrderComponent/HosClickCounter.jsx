import React from 'react';
import WithCounter from './HOC/WithCounter';

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