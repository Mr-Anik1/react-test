import React from 'react';
import AnotherForm from './AnotherForm';
import SmartForm from './SmartForm';

class MyForm extends React.Component{
  state={myValue:'Mr.Anik'}
  
  myHandel=(e)=>{
    console.log(e.target.value);
    this.setState({
      myValue:e.target.value,
    });
  }
  /*
     myHandel Method ekti event pabe jeta amra tar parameter e 
     'e' dara bujachi.Ekhon change/update er jonno 'setState' call korachi. Ekhon prosno holo amra ki change korte chacch? nicchoi seta input box er value!

     tai state e deya property jeta ukto input box er [value] hisabe kaj korche orthat 'myValue' te 'e.target.value' er maddhome notun ja ja event ghotbe seta add korlam.
     ekhane 'e' holo event, target holo ukto input box, ar value holo input box e deya value.
     

     ekhon input box e kichu likhle proti-nieato event ghotbe,abong seta [state] er property'myValue' te add hobe abong seta 'setState' er maddhome change hobe! Sei change ta bujhar jonno 'e.target.value' console log korechi.
  */



  render(){
    const {myValue}=this.state
    return(
      <div>
        <form>
          <input type='text' placeholder='Enter Your Name' value={myValue} onChange={this.myHandel}/>
        </form><br/>
        {/* 

            input e ekta value set korechi, Jeta state e neya 'myValue' namok property.Ekhon input box e 'myValue' te j string(hello Anik) diechi seta show korbe. Kintu amra chile o input box e ar kono kichu likthe parbo na. Karon jokhon react form e value set kora hoi tokhon React nijei seta handel kore.Ar tokhon kichu change korte gele 'setState' call korte hoi.



            ekhon amra chacchi input box e kichu likhbo mane value te change anbo.Tar jonno 'onChange' namok ekta handelar set kore tar moddhe ekta function add korechi jeta te setState({}) er karjokrom thakbe.Tai onChange er moddhe {this.myHandel} namok Method add korachi.
            
        */}



        <AnotherForm/><br/><br/><br/><br/><br/><br/><br/>


         {/*Smart Form*/}
         <SmartForm/>
      </div>
    );
  }
}
export default MyForm;