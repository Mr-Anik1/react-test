// React Lesson-7(Topic=>State):Learn With Sumit
import React from 'react';
class Clock extends React.Component{


    constructor(props){
        super(props);
        this.state={date:new Date()};
       /*
         state holo ekti javascript Object, ar Object er moddhe amra ischa moto property nita pari. Amra jehetu date nia kaj korchi tai ekti 'date' namok property nilam.
 
         Jdi props er kaj na thake tahole amra constructor(),super() esob na likhe erokom likta pari:-
 
         state={date:new Date()}
 
       */
    }
 






   /*
      main DOM e change hower porei componentDidMount call hoi.
      tai er moddhe amra etka timer set kore dicchi jno 1 second por por data change hoi.
   */
   componentDidMount(){
       /*'clockTimer' amar ischa moto neya ekti property jar moddhe ami setInterval() ta rakchi.*/
       this.clockTimer=setInterval(() =>this.tick(),1000);
       /*
        setInterval() Timer er moddhe tick() Method ta call kore dilam.Savabik vabe likhle code ta erokom hoto:-
       
        setInterval(() => {
          this.setState({
            date:new Date(),
          });
        },1000);
        
        Muloto 'setState' er Functional kaj ta tick() Method er moddhe kora hoice, ar eikhane tick() call kora hoice.Fole code ta sundor dekhabe.

        tick() Function ta jehetu clock class er ekti method tai eka access korar jonno 'this' babohar korte hoi.
       */
   }
   

   




   /*component ta jokhon UnMount hoie chole jbe tokhon componentWillUnmount() call hoi.
   Er Moddhe clearInterval set korar fole jokhon ei clock component ta theke beria/chole jaba tokhon clock er karjokrom clear kore diba.

   N.B. clear na korle clock component theke onno component e chole jawer por o clockta cholte thakbe.Onno component e chole gele jno clock ta ar na chole tar jonno 'clearInterval' babohar kora hoice.
   */
   componentWillUnmount(){
      clearInterval(this.clockTimer);
   }





   tick(){
    this.setState({/*setState Method er maddhome react bujte pare data change hoiche abong se tokhon render function call kore dai.*/
        date:new Date(),
    });
   }





   render(){
       return(
           <div>
               <h3>Time {this.state.date.toLocaleTimeString(this.props.local)}</h3>
           </div>
       );  
   }
}
export default Clock;