import React from 'react';

/*
   code duplication komanor jonno ei higher order component ta toiri korlam.Eter boishisto holo eta tar parameter e ekta component ney abong ekta notun component return koer dey.jamon eikhane withCounter namok higher order component toiri korlam jeta er parameter e "orginalComponent" namok ekta component neyecha abong "NewComponent" Namok arekta component return kore diyache.

   N.B. Higher Order Componennt gulor naming er khetre "with" dia suru korte hoi.Jamon amra niyache withCounter.
*/
const WithCounter=(OrginalComponent)=>{
    class NewComponent extends React.Component{
        state={count:0}
        
        incrementCount=()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        }

        render(){
            const {count}=this.state;
           
            return <OrginalComponent count={count} incrementCount={this.incrementCount}/>;
        }
    }
    return NewComponent;

}
export default WithCounter;