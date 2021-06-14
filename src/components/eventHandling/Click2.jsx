//Click2+Button ban to Eng viseversa
import React from 'react';
import Button from './Button';
class Class2 extends React.Component{
    state={date:new Date(),local:'bn-BD'}
    
    tFunk(){
        this.setState({
            date:new Date()
        })
    }

    componentDidMount(){
        this.myTime=setInterval(() =>this.tFunk(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.myTime)
    }

    myHandel=(local)=>{
      this.setState({
          local,
      })
    }


    render(){
        const {date,local}=this.state

        return(
            <div>
              <i>My Time {date.toLocaleTimeString(local)}</i>
              {local==='bn-BD'?(<Button change={this.myHandel} local='en-US' />):(<Button change={this.myHandel} local='bn-BD' />)}
            </div>
           
        );
    }
}
export default Class2;