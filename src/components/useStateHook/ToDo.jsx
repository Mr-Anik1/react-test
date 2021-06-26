import { useState } from "react";

function ToDo(){
    const [todo,setToDo]=useState('');
    const [warning,setWarning]=useState(null);

    const handelChange=(e)=>{
       const inputvalue=e.target.value;
       const updateWarning=inputvalue.includes('.js')?'You need Javascript skill to complete the task.Do you have it?':null;
       setToDo(inputvalue);
       setWarning(updateWarning);
    }

    return(
        <div>
          <p>{todo}</p>
          <p>
             <textarea value={todo} onChange={handelChange}/>
          </p>
          <hr/>
          <h4>{warning || 'Good Choice!'}</h4>
        </div>
    );
}
export default ToDo;