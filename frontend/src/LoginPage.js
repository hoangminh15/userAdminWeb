import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Main from "./LoginPageComponent/Main";
import { useAuth } from './AuthComponent/Auth';
import { RemoveFromQueue } from "@material-ui/icons";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //Fetch user infomation
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ username: username, password: password });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/login", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.headers.get("authorization");
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("accessToken", result);
        alert("Successfully Login");
      })
      .catch((error) => {
        console.log("error", error);
        alert("Username, password are wrong");
      });

      //Handle Auth
      login();
  };

  //Auth stuff
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: {pathname: "/"}};
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    })
  };
  

  return (
    <div className="login__page">
      {/* <Main /> */}
      <div className="input__username">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="input__password">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="pasword"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="button" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
}

export default LoginPage;
