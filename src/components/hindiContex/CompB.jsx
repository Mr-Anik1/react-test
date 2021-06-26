import React from 'react';
import CompC from './CompC';

class CompB extends React.Component{
    render(){
        return(
            <div>
              <CompC/>
            </div>
        );
    }
}
export default CompB;