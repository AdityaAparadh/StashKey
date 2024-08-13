import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vault from './components/Vault'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import HomePage from './components/HomePage'

export const SessionContext = createContext();
export const pageContext = createContext();


function App() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken") || "");
  const [currentPage, setCurrentPage] = useState("home");


  return (
    <SessionContext.Provider value={{ jwtToken, setJwtToken }}>
      <pageContext.Provider value={{ currentPage, setCurrentPage }}>

        { currentPage === "home" && <HomePage /> }
        { currentPage === "login" && <LoginPage /> }
        { currentPage === "signup" && <SignupPage /> }
        { currentPage === "vault" && <Vault /> }
           
        </pageContext.Provider>
    </SessionContext.Provider>
  );
}

export default App;
