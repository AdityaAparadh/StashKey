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
            alert("Login Failed. Check your credentials")
        })
    }
    const keyPressHandler = (e) =>{
        if(e.key === "Enter"){
            LoginHandler();
        }
    }

    return (
        <div className="mocha bg-base h-screen w-screen flex flex-col items-center justify-center" 
        onKeyDown={keyPressHandler}
        >

            <h1 className="text-text text-5xl m-5">Login</h1>
            <input className="m-2 p-1 rounded bg-surface1 border-overlay2 text-text " type="email" id="login-email" placeholder="Email"  value={email} onChange={ e => setEmail(e.target.value)}  />
            <input className="m-2 p-1 rounded bg-surface1 border-overlay2 text-text" type="password" id="login-password" placeholder="Master Password" onChange={ e => setPassword(e.target.value)} />
            <button 
            type="submit"
            id="login-button"
            onClick={(e) =>{
                e.preventDefault();
                LoginHandler();
            }}
            className="w-36 h-10 mt-5 rounded-lg bg-mauve"
            > Log In </button>

            <h5 className=" text-text mt-20 cursor-pointer" onClick={ ()=>{ pContext.setCurrentPage("signup") }}> Sign Up? </h5>
    </div>
    )
}

export default LoginPage;