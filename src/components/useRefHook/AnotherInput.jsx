import React from 'react';
function AnotherInput({type,placeholder},ref){
    return(
        <div>
           <input ref={ref} type={type} placeholder={placeholder}/>
        </div>
    );
}
const ForWardedInput=React.forwardRef(AnotherInput)
/*
   forwardRef mane holo reference k forward kora.Jdi Parent 
   component thekhe kono referance child component e pass korte
   hoi tahole React.forwardRef() use korte hoi.

   kono component Ref er khetre oi component ta k forwardRef() 
   namok function er moddhe dia pass korte hoi.jamon eikhane 
   "AnotherInput" pass korachi ["React.forwardRef(AnotherInput)"]
   forwardRef() arekta component return kore jeta eikhane 
   "ForWardedInput".Erpor amra ForwardedInput export kore dichi.

   <AnotherInput/> k ekta referance nite hobe tar parent 
   <mainUseRef/> thekhe.AnotherInput er prothom parameter e 
   {type,placeholder} dita perachi ar React.forWardRef() er
   karone ditio parameter e "ref" ta deya geche.Er fole parent
   thekhe Reference neyar kajti hoia geche.
*/


export default ForWardedInput;