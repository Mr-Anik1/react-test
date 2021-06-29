import { createContext } from "react";
import CompA from './CompA';

const name=createContext();
const title=createContext();

function MainUseContex(){
    return(
        <div>
          <name.Provider value={"Anik"}>
              <title.Provider value={"Javascript Developer"}>
                 <CompA/>
              </title.Provider>
          </name.Provider>
        </div>
    );
}
export default MainUseContex;
export { name, title };
