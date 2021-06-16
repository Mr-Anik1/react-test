import React from 'react';


/*
  Counter namok ekta component toiri korlam jeta state,handler [functionality er kaj gula korbe] orthat eta Middle component hisabe babohar korbo.
*/
class Counter extends React.Component{
    state={count:0}

    clickHandler=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }

    render(){
        const {render}=this.props;
        const {count}=this.state;
        return render(count,this.clickHandler);
        /*
          props akare j render functin ta neiachy tar parameter e state er "count" ar "this.clickHandler" ta boshia dilam.
        */
    }
}
export default Counter;