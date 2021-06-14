import React from 'react';
import '../cssFolder/index.css';

class AnotherForm extends React.Component{
    state={
        txtaraVal:'Hello I am Anik...',
        selectVal:'React',
        checkVal:false,
        //checkbox er value only true or false hoi!
    }
    


    /*ekta handelar diya amra sobjulo box er onChange er kaj korechi tai if,else if babohar korechi!*/
    formHandler=(e)=>{
      if(e.target.type==='textarea'){
        console.log(e.target.value);
        this.setState({
          txtaraVal:e.target.value,
        });
      }else if(e.target.type==='select-one'){
        console.log(e.target.value);
        this.setState({
          selectVal:e.target.value,
        });
      }else if(e.target.type==='checkbox'){
        console.log(e.target.checked);
        this.setState({
            checkVal:e.target.checked,
            /*
              eta jehutu checkBox tai value er jaigai checked deya hoice!
            */
        });
      }else{
          console.log('Something is wrong!')
      }
    }


    
    submitHandelar=(e)=>{
      const {txtaraVal,selectVal,checkVal}=this.state;
      e.preventDefault();
      /*ekhon submit button e click korle puro page ta reload hobe na.*/

      console.log(txtaraVal,selectVal,checkVal);
      //submit e click korle console e sob result dekhabe!
    }


    render(){
        const {txtaraVal,selectVal,checkVal}=this.state;
        return(
            <div>
              <form onSubmit={this.submitHandelar}>
                  <h4>Textarea:</h4>
                  <textarea name="txtara" value={txtaraVal} placeholder="Write something..." onChange={this.formHandler}></textarea><br/><br/>




                  <h4>Select:</h4>
                  <select value={selectVal} onChange={this.formHandler}>
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value="Vue">Vue</option>
                      <option value="Laraval">Laraval</option>
                      <option value="Django">Django</option>
                  </select><br/><br/>





                  <h4>Checkbox</h4>
                  <input type="checkbox" id="1" checked={checkVal} onChange={this.formHandler}/>React <br/>

                  <input type="checkbox" id="2" checked={checkVal} onChange={this.formHandler}/>Angular<br/><br/>
                  {/* checkBox er mul kaj holo checked holo ki holo na? Tai ei khane value na diya 'checked' dita hobe! */}
                




                   
                   <h4>Submit:</h4>
                   <input type="submit" value='Submit'/>
              </form>
            </div>
        );
    }
}
export default AnotherForm;