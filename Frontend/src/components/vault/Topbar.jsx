import { useContext } from "react";
import Logo from "../../../public/logo.png";

import { SessionContext, pageContext } from "../../App";

const Topbar = ()=>{
    const sessionContext =  useContext(SessionContext);
    const pContext = useContext(pageContext);
    if(sessionContext.jwtToken === ""){
        pContext.setCurrentPage("home");
    }
    return(
        <div className="w-screen h-16 mocha bg-crust flex flex-row justify-center items-center">
            <div className="w-2/3 flex flex-row justify-center items-center">
            <img src={Logo} className="h-11 w-11 mr-5" ></img>
            <h1 className="text-2xl text-mauve font-bold font-logo-font"> STASHKEY </h1>
            </div>
            <button onClick={() => { 
                localStorage.removeItem("jwtToken");
                sessionContext.setJwtToken("");
                  } } className="w-24 h-8 bg-mauve flex items-center justify-center rounded-md"> Logout</button>
        </div>
    )



}

export default Topbar;