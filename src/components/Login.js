import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login({loginState}) {

  const gotoReg = () => {
    loginState("register");
  };

  return (
    <div className="loginpage">
      <div className="logh1">
        <h1>Accedi</h1>
      </div>
      <div className="loginForm">
        <form action="/blogIndex">
          <label htmlFor="username">Username</label>
          <input type="text" id="username"></input>
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword"></input>
          <button class="btn" type="submit" >
            <strong>Accedi</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </form>
      </div>
      <div className="notloggedDiv">
        <p>Non sei ancora registrato?</p>
        <button type="submit" className="registratiBtn" onClick={gotoReg}>Registrati</button>
      </div>
    </div>
  );
}

export default Login;
