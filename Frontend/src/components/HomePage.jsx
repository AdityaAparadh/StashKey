import { useContext } from "react";
import { pageContext } from "../App";


const HomePage = ()=> {

    const pContext = useContext(pageContext);


    return (
        <div>
            <h1>Stashkey : Your Passport to Cyber Safety </h1>
            
            <h2 > With Stashkey it has never been easier to be safe on the Internet </h2>
            
           <a>
             <h5 onClick={()=>{pContext.setCurrentPage("login")}} > Login </h5>
             </a>
             <a>
            <h5 onClick={()=>{pContext.setCurrentPage("signup")}} > Sign Up </h5>
            </a>
        </div>
    )

}

export default HomePage;