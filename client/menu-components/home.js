import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./signup";
import LoginPage from "./login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalSymbol } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
 
  return (
    <div className="login">
      <div className="login-wrap">
        <ul id="account-nav-links">
          <li>
            <Link to="signup" className="account-links">
              Sign up
            </Link>
          </li>
          <li>
            <Link to="login" className="account-links">
              Login
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <FontAwesomeIcon
          icon={faHospitalSymbol}
          style={{ fontSize: "70px", color: "purple", marginLeft: "40%", marginTop: "20px"}}
        />
      </div>
    </div>
  );
};

export default Home;
