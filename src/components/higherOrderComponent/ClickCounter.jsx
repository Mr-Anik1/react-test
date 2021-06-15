import React from 'react';

class ClickCounter extends React.Component{
    state={count:0,}
    
    handelCount=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
        /*
           EiKhane setState er moddhe Object Pass na kore Annonimus Function pass kora hoice, karon count update korar jonno Previous Valu proyojon.Tai eiKhane "prevState" ber kore tar sathe 1 add kore update korechi.

           N.B. Ei bishoy ta Lesson-7 er 28:04 Minute theke bola hoice. 
        */
    }
    render(){
        const {count}=this.state;
        return(
            <div>
              <button onClick={this.handelCount}>Clicked {count} Times</button>
            </div>
        );
    }
}
export default ClickCounter;