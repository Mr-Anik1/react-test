import '../cssFolder/index.css';
import CustomHook from './custom/useCustom';

function LayoutTwo(){
    const smallScreen=CustomHook(700);
    /*
       Screen size parameter akare pass kore bole dilam.
       Akhon 700px er kom hole "small" show korbe.
    */
    return(
        <div>
          <h4> Your screen is {smallScreen?'small':'large'}</h4>
        </div>
    );
}
export default LayoutTwo;