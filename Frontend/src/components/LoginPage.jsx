import axios from "axios";
import { useContext, useState } from "react";
import { SessionContext, pageContext } from "../App";



const LoginPage = ()=> {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const loginContext = useContext(SessionContext);
    const pContext = useContext(pageContext);

    if(loginContext.jwtToken !== ""){
        pContext.setCurrentPage("vault");
    }

    const LoginHandler = () => {
        axios.post( import.meta.env.VITE_BACKEND_URL + "/login", 
            {
                email: email,
                masterPass: password
            }
        ).then((response) => {
            console.log(response.data);
            localStorage.setItem("jwtToken", response.data.token);
            loginContext.setJwtToken(response.data.token);
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
        <form id="login-form">

            <h1>Login</h1>
            <input type="email" id="login-email" placeholder="Email"  value={email} onChange={ e => setEmail(e.target.value)}  />
            <input type="password" id="login-password" placeholder="Master Password" onChange={ e => setPassword(e.target.value)} />
            <button 
            type="submit"
            id="login-button"
            onClick={(e) =>{
                e.preventDefault();
                LoginHandler();
            }}
            
            > Log In </button>

        </form>
            <h5 onClick={ ()=>{ pContext.setCurrentPage("signup") }}> Sign Up? </h5>
    </>
    )
}

export default LoginPage;