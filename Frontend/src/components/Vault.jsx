import { useState, createContext, useContext } from "react";
import { SessionContext, pageContext } from "../App";
import Topbar from "./vault/Topbar";
import Sidebar from "./vault/Sidebar";
import PasswordGen from "./vault/PasswordGen";
import BreachCheck from "./vault/BreachCheck";



// const Vault = () => {
    
//     const sessionContext =  useContext(SessionContext);
//     const pContext = useContext(pageContext);
//     if(sessionContext.jwtToken === ""){
//         pContext.setCurrentPage("home");
//     }

//     console.log("Vault" + sessionContext.jwtToken)
//     return (
//         <div className="h-screen w-screen flex flex-col items-center justify-center">
//             <h1 className="text-5xl m-5"> Vault </h1>
//             <h6> {sessionContext.jwtToken} </h6>

//             <button onClick={() => { 
//                 localStorage.removeItem("jwtToken");
//                 sessionContext.setJwtToken("");
//                   } }>
//                      Logout
//              </button>
//         </div>
//     )
// }

export const vaultContext = createContext();

const Vault = ()=>{
    const sessionContext =  useContext(SessionContext);
    const pContext = useContext(pageContext);
    
    const [ vaultPage, setVaultPage ] = useState("passgen");
    
    if(sessionContext.jwtToken === ""){
        pContext.setCurrentPage("home");
    }

    return(
        <vaultContext.Provider value={{ vaultPage, setVaultPage }}>
        <div className="bg-black w-screen h-screen">
            <Topbar></Topbar>
            <div className="flex flex-row w-full h-full ">

            <Sidebar></Sidebar>
            {/* <PasswordGen ></PasswordGen> */}
            {/* <BreachCheck /> */}
            { vaultPage === "passgen" && <PasswordGen></PasswordGen> }
            { vaultPage === "breachcheck" && <BreachCheck></BreachCheck> }
            
            </div>
        </div>
        </vaultContext.Provider>
    )


}


export default Vault;