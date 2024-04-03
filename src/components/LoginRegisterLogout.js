import React from 'react'
import { useState,useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function LoginRegisterLogout() {

    const [log,setLog]=useState("logreg");
    
    const loginState =(e)=>{
      setLog(e);
      console.log(log);
    }
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '90vh '// Altezza dello schermo
      };

  return (
    <div style={style}>
      {/* <p>gestire registrazione</p> */}
    {log === "logreg" && <Login loginState={loginState}/>}
    {log === "register" && <Register loginState={loginState}/>}
    {log === "logout" && <Logout loginState={loginState}/>}
    
    </div>
  )
}

export default LoginRegisterLogout