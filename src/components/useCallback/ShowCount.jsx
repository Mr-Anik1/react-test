import React from 'react';
//React.memo() babohar korechi tai React import kore nilam.


function ShowCount({title}){
    console.log(`Rendering ${title}...`);
    return(
        <div>
            {title}
        </div>
    );
}
export default React.memo(ShowCount);
/*
  React.memo er Moddhe ShowCount component ta pass kore dilam.
  Ekhon ei component ta ar re-render hobe na.Console e gele 
  seta buja jabe.

  N.B. Higher Order Component e jevabhe Pass korechilam thik 
  sevabhe eikhane pass korlam.
*/