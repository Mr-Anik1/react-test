/*
  Eikhane <CompA/> er moddhe <CompB/> abong <CompB/> er moddhe
  <CompC/> royache.Sutorang sadharon vabe <mainContex/> thekhe
  data <CompC/> te pathate gele <CompA/> & <CompB/> er moddhe 
  "props" akare data pass kore <CompC/> te jete hobe.Ja khuboi
  Jhukipurno.

  Ar ei sommassa ta solve korar jonnoi "Contex API" er abhirbav
  hoice."contex API" er maddhome sohojei <CompA/> & <CompB/> ke ignore kore Direct <CompC/> te Data pathano jabe!!!
*/




import React, { createContext } from 'react';
import CompA from './CompA';
/*
  Contex API er 3 ta step:-
      1.contex toiri korte hobe
      2.Provider dite hobe[Jekhane Data provide kora hobe]
      3.Consumer dite hobe[Jekhane Data recive hobe]
*/


const Firstname=createContext();
const Lastname=createContext();
//contex toiri kore nilam

class MainContex extends React.Component{
    render(){
        return(
            <div>
              React Lesson-16(Topic:Contex Api) Start<br/>
              
              <Firstname.Provider value={"Mr."}>
                <Lastname.Provider value={"Anik"}>
                  <CompA/>
                </Lastname.Provider>
              </Firstname.Provider>
            </div>
            /*
               Firstname & Lastname e j contex toiri korechilam 
               sei Firstname & Lastname e Provider dilam abong 
               Data pass korar jonno value={} set korte hobe 
               abong tar moddhe Data dite hobe. 

               jdi shudu Firstname e data pass kortam tahole
               erokom liktham:-
                   <Firstname.Provider value={"Mr"}>
                      <CompA/>
                   </Firstname.Provider>

            */
        );
    }
}
export default MainContex;
export { Firstname, Lastname };
//Firstname & lastname Export kore dilam.

