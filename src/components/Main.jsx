import Aclass from './Aclass';
import ClockCondition from './conditionalRendering/ClockCondition';
import './cssFolder/index.css';
import Click from './eventHandling/Click';
import Click2 from './eventHandling/Click2';
import MyForm from './formX/MyForm';
import ClickCounter from './higherOrderComponent/ClickCounter';
import HosClickCounter from './higherOrderComponent/HosClickCounter';
import HosHoverCounter from './higherOrderComponent/HosHoverCounter';
import MainContex from './hindiContex/MainContex';
import Calculator from './liftingStateUp/Calculator';
import SmartCalculator from './liftingStateUp/smartBoil/SmartCalculator';
import Name from './Name';
import MainRender from './renderProps/MainRender';
import MainUseContex from './smartUseContex/MainUseContex';
import Clock from './state/Clock';
import TestClock from './state/TestClock';
import MainUseCallBack from './useCallback/MainUseCallBack';
import MainEffect from './useEffectHook/MainEffect';
import MainReducerHook from './useReducerHook/MainReducerHook';
import MainUseRef from './useRefHook/MainUseRef';
import MainUseStateHook from './useStateHook/MainUseStateHook';






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
      <h4>React Lesson-7(Topic:State) Start</h4><br/><br/>
      

      <Clock local='en-us'/>
      <Clock local='bn-BD'/>
      {/* Clock component ta 1 bar Import kore 2 bar babohar korlam */}

      Amar Test Kora
      <TestClock/>
      {/*React Lesson-7 End*/}



      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>












      <h4> ************************************************************************************************************************************</h4><br/>
      {/*React Lesson-8(Topic:Event handling) Start*/}
      <h4>React Lesson-8(Topic:Event handling) Start</h4><br/><br/><br/>

      Click korle clock Bangla to English hoia jbe!
      <Click/><br/><br/><br/>

     
      English to Bangla & Bangla to English<br/><br/>
      <Click2/>
      {/*React Lesson-8 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>










      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-9(Topic:Conditional Rendering) Start */}
      <h4>React Lesson-9(Topic:Conditional Rendering) Start</h4><br/><br/>

       My Conditional Clock<br/>
      
      
       <ClockCondition/>
      


      {/*React lesson-9 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>











      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-10(Topic:Form Handling) Start */}
      <h4>React Lesson-10(Topic:Form Handling) Start</h4><br/><br/>
       FunForm!
       <MyForm/>
       
      {/*React lesson-10 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>



      










      <h4> ************************************************************************************************************************************</h4>
      {/* React Lesson-11(Topic:Lifting State Up) Start */}
      <h4>React Lesson-11(Topic:Lifting State Up) Start</h4><br/>

        <Calculator/><br/><br/><br/><br/><br/>
        <SmartCalculator/>
        
      {/*React lesson-11 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>















      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-13(Topic:Higher Order Component) Start */}
      <h4>React Lesson-13(Topic:Higher Order Component) Start</h4><br/>
       
        <ClickCounter/><br/><br/><br/>
        <HosClickCounter/><br/><br/>
        <HosHoverCounter/>
        
      {/*React lesson-13 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>














      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-14(Topic:Render Props) Start */}
         
         <MainRender/>
       
      {/*React lesson-14 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>











      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-16(Topic:Contex Api) Start */}
         

         {/*From Hindi Video*/}
         <MainContex/><br/><br/>

         {/* useContex by Sumit Dada */}
         <h4>Smart way by useContex()</h4>
         <MainUseContex/>
        
       
      {/*React lesson-16 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>



         

      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-19(Topic:useState() Hook) Start */}
      <h4>React Lesson-19(Topic:useState() Hook) Start</h4><br/>
         
         <MainUseStateHook/>
   
         
      {/*React lesson-19 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>













      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-20(Topic:useEffect() Hook) Start */}
      <h4>React Lesson-20(Topic:useEffect() Hook) Start</h4><br/>
         
         <MainEffect/>
   
         
      {/*React lesson-20 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>


       




      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-21 Topic:useCallback()  Start */}
      <h4>React Lesson-21 Topic:useCallback()  Start</h4><br/>
         
         <MainUseCallBack/><br/>
         
      {/*React lesson-21 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>











      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-22 Topic:useRef()  Start */}
      <h4>React Lesson-22 Topic:useRef()  Start</h4><br/>
         
         <MainUseRef/>
         
      {/*React lesson-22 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>
      










      <h4> ************************************************************************************************************************************</h4>
      {/*React Lesson-23 Topic:useReducer()  Start */}
      <h4>React Lesson-23 Topic:useReducer()  Start</h4><br/>
         
         <MainReducerHook/>

      {/*React lesson-23 End*/}
      ************************************************************************************************************************************<br/><br/><br/><br/><br/><br/>
      









    </div>
  );
}
export default Main;