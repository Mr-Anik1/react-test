import Counter from './Middle/Counter';
import RenderClickCounter from './RenderClickCounter';
import RenderHoverCounter from './RenderHoverCounter';

export default function MainRender(){
    return(
        <div>
            React Lesson-14(Topic:Render Props) Start<br/><br/>

            <Counter 
              render={(count,clickHandler)=>(<RenderClickCounter count={count} clickHandler={clickHandler}/>)}
            /><br/><br/>
            {/* 
                jehatu amader "state" abong "handler" er kaj gulo "<Counter/>" component e kora hoice tai eikhane counter ta import kore tar moddhe render function ta neyechi.



                ***********************************************
                render={
                  (count,clickHandler)=>(<RenderClickCounter count={count} clickHandler={clickHandler}/>)
           
                  //render er parameter e "Count" ar "clickHandler" dieachi. Abong render er function Body te <RenderClickHandler/> namok component niyachi.

                  <RenderClickHandler/> component er moddhe count={} ar clickhandler={} deya hoice jagulo props akare pathano hoyechilo.

                  ar render function er parameter e daya (count,clickHandler) <RenderClickHandler/> component er count={count} clickhandler={clickhandler}
                  e pass kora hoice.
                  Fole <Counter/> component e j state{count:0} o handeler{this.clickHandler} er kaj kora hoice seta automatic <RenderClickHandler/> peya jabe.
                 
                  N.B. Dinsheshe Eivhaabe kaj korar fole amader ar code duplication hobe na!
                }
                ************************************************
            
            */}






            <Counter render={(count,clickHandler)=>(<RenderHoverCounter count={count} clickHandler={clickHandler}/>)}/>
            {/* 
               Amra chaile kajta nicher moto korte pari tokhon ar "render=" likthe hode na.

               <Counter>

                 {(count,clickHandler)=>(<RenderHoverCounter count={count} clickHandler={clickHandler}/>)}
                 
               </Counter/>
               
            */}
        </div>
    );
}