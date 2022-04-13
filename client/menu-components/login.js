import React from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

const LoginPage = () => {
  const [user, loginUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    axios
      .post("http://localhost:4000/api/login", qs.stringify(user))
      .then((res) => {
        res.send(res.data);
        if (res.data.redirect === "/") {
          window.location = "/home";
        } else if (
          res.data.redirect === "/query" &&
          user.username.value !== "" &&
          user.password.value !== ""
        ) {
          window.location = "/query";
        }
      })
      .catch((err) => {
        console.log(err);
        window.location = "/query";
      });
  };
  return (
    <div>
      <div>
        <h2>Login to Healthsys</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="login">Username:</label>
          <input
            type="text"
            name="login"
            id="login"
            spellCheck="false"
            value={user.username}
            onChange={(e) => loginUser({ ...user, username: e.target.value })}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            min="6"
            max="15"
            value={user.password}
            onChange={(e) => loginUser({ ...user, password: e.target.value })}
          ></input>
          <button type="submit" id="login-btn">
            Login
          </button>
          <span>
            <em>Healthsys &copy; 2022</em>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
