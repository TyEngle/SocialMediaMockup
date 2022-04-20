import React from 'react'
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../home`;
    navigate(path);
  };

  return (
    <div className="SignInBox">
      <form className="SignInForm">
        <h1>Sign In!</h1>
        <label for="username">Username:</label>
        <input
          name="username"
          onChange={updateUsername}
          type="text"
          placeholder="username"
          value={username}
        ></input>
        <label for="password">Password:</label>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
        ></input>
        <button
          type="button"
          onClick={() => {
            setUsername("");
            setPassword("");
          }}
          onClick={routeChange}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

