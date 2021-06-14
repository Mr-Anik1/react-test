import React from 'react';
import '../cssFolder/index.css';

class SmartForm extends React.Component{
    state={
        myValue:'Mr.Anik',
        txtaraVal:'Hello I am Anik...',
        selectVal:'React',
    }
    

    smartHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    }
    /*
      Jokhon event ta fire hobe tokhon onChange e deya smarthandler() method ta call hobe.Abong er setState() e 
      [e.target.name] er jaigai ukto input er name ta bose jabe & dinamically value ta bose jabe.


      Jamon ei form er 2nd input holo ekta textarea.Jokhon amra ukto textarea te kichu likthe jabo tokhon event ta fire hobe abong 'onChange' e deya smarthandler() call hobe.Ekhon 'setState' er [e.target.name] er gaigay ukto textarea er name="txtaraVal" bosbe abong value ta o bose jabe.

       
      [e.target.name]:e.target.value (eta nicher moto hobe:-)

      [e.target.txtaraVal]:e.target.txtaraVal
                      ^
                      ^
                      ^
              [txtaraVal]:txtaraVal (erokom Hobe!)
       
              


        
      Fole Code Ta Nicher moto Hobe:-

       smartHandler=(e)=>{
          this.setState({
              txtaraVal:txtaraVal,
          });
        }      
 
      fole dekha gelo automatic/dinamically value bose gese.Tai eber setState() er maddhome update hobe onashya!


      N.B. Ei Vabe korle Ager Form er moto eto if/else if babohar korte hobe na.Tobe eivabe kaj orte gele input box e name(jamon:"higo") ar value(Ekoi:"higo") er nam ekoi dita hobe! 
    */
    




    



    submitHandelar=(e)=>{
      const {myValue,txtaraVal,selectVal}=this.state;
      e.preventDefault();
      /*ekhon submit button e click korle puro page ta reload hobe na.*/

      console.log(myValue,txtaraVal,selectVal);
      //submit e click korle console e sob result dekhabe!
    }





    render(){
        const {txtaraVal,selectVal,myValue}=this.state;
        return(
            <div>
              <h4>Smart way Babohar kore Form Toiry Korlam!</h4>
              <form onSubmit={this.submitHandelar}>
                 

                 {/*Input For Name*/}
                 <input name="myValue" type='text' placeholder='Enter Your Name' value={myValue} onChange={this.smartHandler}/><br/><br/>
                 {/* Smart Way te kaj korte gela name ar value er Nam ekoi dita hobe. Jamon eikhane name="myValue" diachi & value={myValue} diachi.*/}
              



                  {/*Input For Textarea */}
                  <textarea name="txtaraVal" value={txtaraVal} placeholder="Write something..." onChange={this.smartHandler}></textarea><br/><br/>




                  
                  {/* Input For Select */}
                  <select name="selectVal" value={selectVal} onChange={this.smartHandler}>
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value="Vue">Vue</option>
                      <option value="Laraval">Laraval</option>
                      <option value="Django">Django</option>
                  </select><br/><br/>



                   
                   {/*Input For Submit*/}
                   <input type="submit" value='Submit'/>
              </form>
            </div>
        );
    }
}
export default SmartForm;