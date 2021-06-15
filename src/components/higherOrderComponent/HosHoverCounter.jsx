import React from 'react';
import WithCounter from './HOC/WithCounter';

class HosHoverCounter extends React.Component{
    render(){
        const {count,incrementCount}=this.props;
        return(
            <div>
              <h2 onMouseOver={incrementCount}>Hover {count} Times</h2>
              {/* er upore mouse nile count hobe */}
            </div>
        );
    }
}
export default WithCounter(HosHoverCounter);