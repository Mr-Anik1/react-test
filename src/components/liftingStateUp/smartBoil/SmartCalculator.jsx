import React from 'react';
import CelsiusBoilingVerdit from './CelsiusBoilingVerdit';
import { convert, toCelsius, toFahrenhiet } from './lib/converter';
import TemperaturInput from './TemperaturInput';

class SmartCalculator extends React.Component{
    state={
        temperatur:'',
        scale:'',
    }
    
    handelChange=(e,scale)=>{
        this.setState({
          temperatur:e.target.value,
          scale,
        });
    }

    render(){
        const {temperatur,scale}=this.state;
        
        const celsius=scale==='f'?convert(temperatur,toCelsius):temperatur;
        const fahrenheit=scale==='c'?convert(temperatur,toFahrenhiet):temperatur;

        return(
            <div>
              <TemperaturInput scale='c' temperatur={celsius} onTemperaturChange={this.handelChange}/><br/>
              <TemperaturInput scale='f' temperatur={fahrenheit} onTemperaturChange={this.handelChange}/><br/>

              <CelsiusBoilingVerdit celsiusTemp={parseFloat(celsius)}/>
              {/* Ei khane {celsius} deya hoice ei karone j amra Boiling verdit e hisab korechi 100 degree Mane celsius e.
              
              Jdi celsiusTemp={parseFloat(temperatur)} ditam tahole jokhon Fahrenhiet er ghore value input kortam tokhoh ganjum badtho.karon BoilingVerdit e hisab korchi 100 te. Jokhon Farenheit er ghore 100 bosatam tokhon eta output dito "Water Would Boiled" jeta hassokor! karon 100 degree Farenheit e kokhono pani fute na.
              
              tai eikhane state er temperatur na niya nita hobe const e banano celsius!
              */}
            
            </div>
        );
    }
}
export default SmartCalculator;