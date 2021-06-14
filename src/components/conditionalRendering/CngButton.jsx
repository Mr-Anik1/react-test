import React from 'react';
class CngButton extends React.Component{
    render(){
        const {change,local}=this.props
        return(
            <div>
              <button onClick={()=>change(local)}>{local==='en-US'?'Poriborton Kor':'Change Clock'}</button>
            </div>
        );
    }
}
export default CngButton;