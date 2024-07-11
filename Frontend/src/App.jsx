import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Vault from './components/Vault'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import HomePage from './components/HomePage'

export const SessionContext = createContext();

function App() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken") || "");

  return (
    <SessionContext.Provider value={{ jwtToken, setJwtToken }}>

    { jwtToken === "" ? <LoginPage /> : <Vault />}

    </SessionContext.Provider>
  );
}

export default App;
