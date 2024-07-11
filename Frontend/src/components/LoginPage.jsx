const LoginPage = ()=> {


    return (
        <form id="login-form">

            <h1>Login</h1>
            <input type="email" id="login-email" placeholder="email" />
            <input type="password" id="login-password" placeholder="password" />
            <button 
            type="submit"
            id="login-button"
            onClick={(e) =>{
                e.preventDefault();
                
            }}
            
            > Log In </button>


        </form>



    )



}

export default LoginPage;