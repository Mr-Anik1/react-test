import React from 'react';

class CelsiusBoilingVerdit extends React.Component{
  render(){
    const {celsiusTemp}=this.props;
    if(celsiusTemp>=100){
       return <h4>Water would boiled</h4>
    }else if(celsiusTemp<100){
       return <h4>water would not boiled</h4>
    }else{
      return <h4>Something is Wrong.Try Again!</h4>
    }
  }
}
export default CelsiusBoilingVerdit;