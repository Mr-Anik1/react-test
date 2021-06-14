import React from 'react';
import CngButton from './CngButton';

class ClockCondition extends React.Component{
    state={date:new Date(),local:'en-US'}

    myFunk(){
        this.setState({
            date:new Date()
        });
    }
    
    componentDidMount(){
        this.time=setInterval(() =>this.myFunk(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.time)
    }

    changeFunk=(local)=>{
        this.setState({
          local:local,
        });
    }

    render(){
        const {date,local}=this.state
        return(
            <div>
             <i>Conditional Clock {date.toLocaleTimeString(local)}</i>
             {local==='en-US'?(<CngButton change={this.changeFunk} local='bn-BD'/>):(<CngButton change={this.changeFunk} local='en-US'/>)}
            </div>
        );
    }
}
export default ClockCondition;