import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./register.css"

function Register({ loginState }) {

  const sendLog = () => {
    loginState("logreg");
  };

  return (
    <div className="registerPagecss">
      <div className="regh1">
        <h1>Registrati</h1>
      </div>
      <div className="registerForm">
        <form action="/">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="surname">Cognome</label>
          <input type="text" id="surname" />

          <label htmlFor="street">Indirizzo</label>
          <input type="text" id="street" placeholder="Via" />
          <input type="text" id="city" placeholder="Città" />
          <input type="text" id="country" placeholder="Stato" />

          <label htmlFor="cell">Telephone</label>
          <input type="text" id="cell" />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input type="password" id="passwordConfirm" />

          <button type="submit" className="regBtn">
            Registrati
          </button>
        </form>
      </div>

      <div className="notRegDiv">
        <p>Sei giaà registrato?</p>
        <button type="submit" className="accediBtn" onClick={sendLog}>Accedi</button>
      </div>
    </div>
  );
}

export default Register;
