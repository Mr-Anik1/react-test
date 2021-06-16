import React from 'react';
import '../cssFolder/index.css';

class RenderHoverCounter extends React.Component{
    render(){
        const {count,clickHandler}=this.props;
        return(
            <div>
              <h4 onMouseOver={clickHandler}>Hoverd {count} Times</h4>
            </div>
        );
    }
}
export default RenderHoverCounter;