import { useContext } from "react";
import { pageContext } from "../App";


const HomePage = ()=> {

    const pContext = useContext(pageContext);


    return (
        <div className="mocha bg-base text-text flex flex-col h-screen w-screen items-center justify-center">
            <h1 className="text-5xl font-bold">Stashkey : Your Passport to Cyber Safety </h1>
            
            <h2 > With Stashkey it has never been easier to be safe on the Internet </h2>
            
           <div>
             <h5 className="bg-mauve text-base h-10 w-40 m-2 rounded-md flex items-center justify-center cursor-pointer" onClick={()=>{pContext.setCurrentPage("login")}} > Login </h5>
             </div>
             <div>
            <h5 className="bg-mauve text-base  h-10 w-40 m-2 flex items-center justify-center rounded-md cursor-pointer" onClick={()=>{pContext.setCurrentPage("signup")}} > Sign Up </h5>
            </div>
        </div>
    )

}

export default HomePage;