import { useContext } from "react";
import { SessionContext, pageContext } from "../App";




const Vault = () => {
    
    const sessionContext =  useContext(SessionContext);
    const pContext = useContext(pageContext);
    if(sessionContext.jwtToken === ""){
        pContext.setCurrentPage("home");
    }

    console.log("Vault" + sessionContext.jwtToken)
    return (
        <div>
            <h1> Vault </h1>
            <h6> {sessionContext.jwtToken} </h6>

            <button onClick={() => { 
                localStorage.removeItem("jwtToken");
                sessionContext.setJwtToken("");
                  } }>
                     Logout
             </button>
        </div>
    )
}

export default Vault;