import React from 'react';
import { Firstname, Lastname } from './MainContex';
//Firstname & Lastname import kore nilam

class CompC extends React.Component{
    render(){
        return(
            <div>
               <Firstname.Consumer>
                 {(fname)=>{
                   return(
                     <Lastname.Consumer>
                       {(lname)=>{
                          return(
                            <h2>Hello My name {fname} {lname}</h2>
                          );
                       }}
                     </Lastname.Consumer>
                   );
                 }}
               </Firstname.Consumer>
            </div>
            /*
               <MainContex/> e j Firstname & Lastname e data 
               Provide korlam ekhon seta consumer er maddhome 
               receive korte hobe. 
               
               consumer er system e data receive korar jono 
               starting(<.consumer>) & Ending(</.consumer>) 
               consumer er moddhe Function call korte hoi.Ar 
               Function Body te return korte hoi ki likhbo abong
               parameter er maddhome pass hoya Data jamon{fname}
               Bosano jai.


               Jdi shudu Firstname e data receive kortam tahole 
               erokom hoto:-
                     <Firstname.Consumer>
                       {(fname)=>{
                           return(
                               <h2>Hello my name {fname}</h2>
                           );
                       }}
                     </Firstname.Consumer>
                Provider e j value set korechilam oita Eikhane
                Function er parameter "fname" er maddhone pass 
                hobe.Fole jaigamoto <Maincontex/> theke pathano
                Data ekhane bose jabe.






                *************************************************
                <Firstname.Consumer>
                 {(fname)=>{
                   return(
                     <Lastname.Consumer>
                       {(lname)=>{
                          return(
                            <h2>Hello My name {fname} {lname}</h2>
                          );
                       }}
                     </Lastname.Consumer>
                   );
                 }}
                </Firstname.Consumer>

                
                Eikhane Firstname & Lastname er Data pathano 
                hoice.Firstname er starting(<.consumer>) & Ending
                (</.consumer>) consumer er Moddhe Ekta function 
                rakha hoice abong oi Function Body te 
                <Lastname.consumer> return() kora hoice.Abong oi 
                akoi vabhe Lastname er starting(<.consumer>) &
                Ending(</.consumer>) consumer er Moddhe Ekta 
                function rakha hoice abong oi Function Body te 
                <h2> er vitor Firstname & Lastname er parameter 
                e powya value {fname} {lname} set/receive kora 
                ta return kora hoice.
                *************************************************
                

            */
        );
    }
}
export default CompC;