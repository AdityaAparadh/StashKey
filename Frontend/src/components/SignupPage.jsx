import SecurityQuestions from '../assets/SecurityQuestions.js';
import { useState } from 'react';
import axios from 'axios';



const SignupPage = ()=> {


    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

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

        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <form id="login-form">

            <h1>Sign Up</h1>
            <input type="text" id="signup-name" placeholder="Name" value={name} onChange={ e => setName(e.target.value)}    />
            <input type="email" id="signup-email" placeholder="Email"  value={email} onChange={ e => setEmail(e.target.value)}  />
            <input type="password" id="signup-password" placeholder="Master Password" onChange={ e => setPassword(e.target.value)} />


            {/* <select id="security-question">

            {
                Object.keys(SecurityQuestions).map((key, index) => {
                    return (
                        <option value={key}>{SecurityQuestions[key]}</option>
                    )
                })
            }
                
            </select>


            <input type="text" id="signup-security-code" placeholder="Security Question Answer" />
            <input type="text" id="signup-masterpass-hint" placeholder="Security Question Answer" /> */}


            <button 
            type="submit"
            id="signup-button"
            onClick={(e) =>{
                e.preventDefault();
                submissionHander();

            }}
            
            > Sign Up </button>


        </form>



    )


}

export default SignupPage;