import Aclass from './Aclass';
import ClockCondition from './conditionalRendering/ClockCondition';
import './cssFolder/index.css';
import Click from './eventHandling/Click';
import Click2 from './eventHandling/Click2';
import MyForm from './formX/MyForm';
import Calculator from './liftingStateUp/Calculator';
import SmartCalculator from './liftingStateUp/smartBoil/SmartCalculator';
import Name from './Name';
import Clock from './state/Clock';
import TestClock from './state/TestClock';




function Main(){
  return(
    <div>
      {/*Class Component*/}
      <Aclass/>



      {/*Functional Component*/}
      <Name/><br/><br/><br/><br/>









      <h4> 
      ************************************************************************************************************************************</h4>



      {/* React Lesson-7(Topic:State) Start */}
      <Clock local='en-us'/>
      <Clock local='bn-BD'/>
      {/* Clock component ta 1 bar Import kore 2 bar babohar korlam */}

      Amar Test Kora
      <TestClock/>
      {/*React Lesson-7 End*/}



      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>












      <h4> ************************************************************************************************************************************</h4><br/>



      {/*React Lesson-8(Topic:Event handling) Start*/}
      Click korle clock Bangla to English hoia jbe!
      <Click/><br/><br/><br/>

     
      English to Bangla & Bangla to English<br/><br/>
      <Click2/>
      {/*React Lesson-8 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>










      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-9(Topic:Conditional Rendering) Start */}
       My Conditional Clock<br/>
      
      
       <ClockCondition/>
      


      {/*React lesson-9 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>











      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-10(Topic:Form Handling) Start */}
       FunForm!
       <MyForm/>
       
      {/*React lesson-10 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>



      










      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-11(Topic:Lifting State Up) Start */}

        <Calculator/><br/><br/><br/><br/><br/>
        <SmartCalculator/>
        
      {/*React lesson-11 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>










    </div>
  );
}
export default Main;