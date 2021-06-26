import React from 'react';

function Button({increment,children}){
  console.log(`Rendering ${children}`);
    return(
        <div>
          <button onClick={increment}>{children}</button>
        </div>
    );
}
export default React.memo(Button);
/*
  React.memo() dia ei button er re-render atkate chacchi.Kintu
  Ei Button e jahutu Function er kaj ache ar amra jani Function
  Holo referance type tai shudhu React.memo() dara etar 
  re-rendring atkano jabe na.

  Referance type jinish-pati gulor re-rendering atkanor jonno
  useCallback() hook babohar korte hoi.Eta <MainUseCallBack/>
  component e bakkha kora hoice.
*/