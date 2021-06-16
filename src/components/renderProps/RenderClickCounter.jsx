import React from 'react';

class RenderClickCounter extends React.Component{
    render(){
        const {count,clickHandler}=this.props
        return(
            <div>
              <button onClick={clickHandler}>Clicked {count} Times</button>
            </div>
        );
    }
}
export default RenderClickCounter;