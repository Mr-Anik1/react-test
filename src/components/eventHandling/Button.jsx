import React from 'react';
class Button extends React.Component{
    render(){
        const {change,local}=this.props
        return(
            <div>
              <button onClick={()=>change(local)}> {local==='bn-BD'?"Change Clock":"Ghori Poriborton Korun"} </button>
            </div>
        );
    }
}
export default Button;