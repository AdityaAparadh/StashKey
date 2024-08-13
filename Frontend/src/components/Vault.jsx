import { useContext } from "react";
import { SessionContext, pageContext } from "../App";
import Topbar from "./vault/Topbar";
import Sidebar from "./vault/Sidebar";
import PasswordGen from "./vault/PasswordGen";




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
const Vault = ()=>{
    const sessionContext =  useContext(SessionContext);
    const pContext = useContext(pageContext);
    if(sessionContext.jwtToken === ""){
        pContext.setCurrentPage("home");
    }

    return(
        <div className="bg-black w-screen h-screen">
            <Topbar></Topbar>
            <div className="flex flex-row w-full h-full ">

            <Sidebar></Sidebar>
            <PasswordGen ></PasswordGen>
            </div>
        </div>
    )


}


export default Vault;