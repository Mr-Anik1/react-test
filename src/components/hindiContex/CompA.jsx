import React from 'react';
import CompB from './CompB';

class CompA extends React.Component{
    render(){
        return(
            <div>
              <CompB/>
            </div>
        );
    }
}
export default CompA;