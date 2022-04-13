import "./App.css";
import React from "react";
import DoctorInfo from "./doctors";
import NewPatient from "./patients";
import MedicalRecord from "./records";
import Query from "./query";
// import LoginPage from "./login";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar";

const App = () => {
  //call components as elements not functions, otherwise react renders an empty page
  return (
    <div className="App">
      <NavBar />
      <hr></hr>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home/*" element={<Home />} />
        <Route path="doctors" element={<DoctorInfo />} />
        <Route path="patients" element={<NewPatient />} />
        <Route path="records" element={<MedicalRecord />} />
        <Route path="query/*" element={<Query />} />
      </Routes>
    </div>
  );
};

export default App;
