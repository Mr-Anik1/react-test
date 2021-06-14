import React from 'react';
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit',
};

class TemperaturInput extends React.Component{
    render(){
        const {scale,temperatur,onTemperaturChange}=this.props;
        return(
            <div>
                <fieldset>
                    <legend>Enter Temperatur in {scaleNames[scale]}</legend>
                    <input type="text" value={temperatur} onChange={(e)=>onTemperaturChange(e,scale)}/>
                </fieldset>
            </div>
        );
    }
}

export default TemperaturInput;