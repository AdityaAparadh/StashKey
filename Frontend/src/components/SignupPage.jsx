import SecurityQuestions from '../assets/SecurityQuestions.js';
import { useState, useContext } from 'react';
import axios from 'axios';
import { pageContext } from '../App.jsx';



const SignupPage = ()=> {


    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const pContext = useContext(pageContext);


    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    const submissionHander = () => {

        axios.post( BACKEND_URL + "/signup", 
            {
                name: name,
                email: email,
                masterPass: password,
                securityKey : "temp"
            }
        ).then((response) => {
            console.log(response.data);
            // console.log(response.status)
            if( response.status == 200 ){
                alert("Created Account Successfully, Please Login!")
            }else{
                alert("Error Occured!")
            }

        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div className="mocha bg-base h-screen w-screen flex flex-col items-center justify-center">

            <h1 className="text-text text-5xl m-5">Sign Up</h1>
            <input className="m-3 p-1 rounded bg-surface1 border-overlay2 text-text " type="text" id="signup-name" placeholder="Name" value={name} onChange={ e => setName(e.target.value)}    />
            <input className="m-3 p-1 rounded bg-surface1 border-overlay2 text-text " type="email" id="signup-email" placeholder="Email"  value={email} onChange={ e => setEmail(e.target.value)}  />
            <input className="m-3 p-1 rounded bg-surface1 border-overlay2 text-text " type="password" id="signup-password" placeholder="Master Password" onChange={ e => setPassword(e.target.value)} />

            <button 
            type="submit"
            id="signup-button"
            onClick={(e) =>{
                e.preventDefault();
                submissionHander();

            }}
            className="w-36 h-10 mt-5 rounded-lg bg-mauve"
            
            > Sign Up </button>




        <h5 className="text-text mt-5 cursor-pointer" onClick={ ()=>{ pContext.setCurrentPage("login") }}> Already have an account? </h5>
        </div>
    )


}

export default SignupPage;