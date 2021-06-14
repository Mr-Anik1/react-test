import React from 'react';
import BoilingVerdit from './BoilingVerdit';

class Calculator extends React.Component{
    state={
        temperatur:'',
    }

    temperaturHandel=(e)=>{
        this.setState({
           temperatur:e.target.value,
        });
    }

    render(){
        const {temperatur}=this.state;
        return(
            <div>
               <fieldset>
                   <legend>Enter Temperatur in Celsius</legend>
                   <input type="text" value={temperatur} onChange={this.temperaturHandel}/>
               </fieldset>
               <BoilingVerdit celsius={parseFloat(temperatur)}/>
            </div>
        );
    }
}
export default Calculator;