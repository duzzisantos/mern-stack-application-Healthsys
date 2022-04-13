import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalSymbol } from "@fortawesome/free-solid-svg-icons";
import React from "react";


export const Header = () => {
  return (
    <h1>
      Healthsys
      <HealthIcon />
    </h1>
  );
};

const HealthIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faHospitalSymbol} />
    </>
  );
};
