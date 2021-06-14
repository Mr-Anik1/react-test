//React Lesson-8(Topic:Event Handling)
import React from 'react';
class Click extends React.Component{
    state={date:new Date(),local:'bn-BD'};
    /*
      bind() babohar kore this er problem solve:-

      constructor(props){
          super(props);
          this.handelClick=this.handelClick.bind(this)
      }
    */

    trick(){
        this.setState({
            date:new Date(),
        });
    }

    
   componentDidMount(){
      this.time=setInterval(() =>this.trick(),1000);
   }
     
    componentWillUnmount(){
        clearInterval(this.time);

    }


    /*Normal Function babohar korle 'this' er karone Problem hobe, tai ei khane Arrow Function babohar korte hobe*/
    handelClick=()=>{
       this.setState({
          local:'en-US',
       });
      /*Jokhon button e click korbo tokhon local ta 'bn-BD' theke change hoia 'en-US' hoia jbe.*/
    }


    render(){
        const {date,local}=this.state;
        /*Destring Kore nichi jar karone bar bar 'this.state' likthe hobe na*/

        return(
            <div>
              <h4>Time {date.toLocaleTimeString(local)}</h4>


              <button type='button' onClick={this.handelClick} >click</button>


              {/*handelClick e parameter pathate chile 2 ta way follow korte pari:-
              
              1.bind() er maddhome
               

              onClick={this.handelClick.bind(this,parameter)} 
              

              bind() er prothom ongshe this abong porer ongshe parameter pathate pari.

              Abar 'this' er problem ta 'bind()' er maddhome solve kora jai.Karon bind er prothom ongshe je "this" dichi seta mul this k indicat kore.Fole 'this' nia ar kono sommassa hoi na.





              2.Arrow function er maddhome parameter pathano


              onClick={()=>this.handelClick(parameter)}


              Arrow function babohar kore handelClick/Method call kore tar moddhe parameter pathate pari.
              */}
            </div>
        );
    }
}
export default Click;