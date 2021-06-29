/*
   N.B. useContex() babohar er subidha holo amader "consumer"
   babohar korte hoi na.Fole jinista aro sohoj hoia jai!
*/


import { useContext } from "react";
import { name, title } from './MainUseContex';
//name,title <MainUseContex/> theke import kore nilam

function CompD(){
    /*
       smartWayName namok property er moddhe useContex() rekhe 
       tar vitor import kora "name" ta rakhechi.Fole Eikhaner
       "smartWayName" automatic import kora "name" er 
       value("Anik") ta peya jabe.
    */
    const smartWayName=useContext(name);
    const smartWayTitle=useContext(title);
    /*
       smartWayTitle namok property er moddhe useContex() rekhe 
       tar vitor import kora "title" ta rakhechi.Fole Eikhaner
       "smartWayTitle" automatic import kora "title" er 
       value("Javascript Developer") ta peya jabe.
    */


    return(
        <div>
          <h2>{smartWayName} {smartWayTitle}</h2>
          {/*Eikhane "smartWayName" abong "smartWayTitle" <h2>
            er moddhe pass kor dieachi.Fole amader projineo
            value eikhane show korbe!
          */}
        </div>
    );
}
export default CompD;