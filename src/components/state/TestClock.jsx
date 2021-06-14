import React from 'react';
class TestClock extends React.Component{
  state={testDate:new Date()};

  testTrick(){
     this.setState({
       testDate:new Date(),
     });
  }

  componentDidMount(){
      this.testClock=setInterval(() =>this.testTrick(),1000);
  }

  componentWillUnmount(){
      clearInterval(this.testCock);
  }



    render(){
        return(
            <div>
                <h3>TestTime {this.state.testDate.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default TestClock;