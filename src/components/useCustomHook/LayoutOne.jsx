import CustomHook from './custom/useCustom';

function LayoutOne(){
    const smallScreen=CustomHook(768);
     /*
       Screen size parameter akare pass kore bole dilam.
       Akhon 768px er kom hole "small" show korbe.
    */
    return(
        <div>
           <h1>You are in {smallScreen?'small':'large'} device</h1>
           {/* 
               smallScreen jdi true hoi orthat 768px er niche hoi
               tahole "small" show korbe, Onnothay "large" show 
               korbe.
           */}
        </div>
    );
}
export default LayoutOne;
