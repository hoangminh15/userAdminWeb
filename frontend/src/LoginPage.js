import React, { useState } from "react";
import Main from "./LoginPageComponent/Main";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
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
