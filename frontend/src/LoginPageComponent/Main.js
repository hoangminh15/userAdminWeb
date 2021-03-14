import React from "react";
import LoginForm from "./LoginForm";
import './Main.css'

function Main() {
  return (
    <div className="main">
      <div className="app__content">
        <img src="./facebook-logo.svg" className="facebook__logo" alt="" />
        <LoginForm />
      </div>
    </div>
  );
}

export default Main;
