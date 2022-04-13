import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import qs from 'qs';

const baseURL = "http://localhost:4000/api/patients";

const NewPatient = () => {
  const [patient, setPatient] = useState({
    patientID: 0,
    firstname: "",
    lastname: "",
    postaladdress: "",
    email: "",
    telephone: 0,
    nextofkin: "",
    nextofkintel: 0,
    bloodgroup: "",
  });

  const handleSubmit = () => {
    console.log(patient);
    axios
      .post(baseURL, qs.stringify(patient))
      .then((response) => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <div id="newpatient-form-wrapper">
        <form id="new-patient-form" onSubmit={handleSubmit}>
          <h2>Enter new patient information</h2>
          <label htmlFor="patientID">Patient ID</label>
          <input
            type="number"
            onChange={(event) =>
              setPatient({ ...patient, patientID: event.target.value })
            }
            value={patient.patientID}
            name="patientID"
          ></input>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            onChange={(event) =>
              setPatient({ ...patient, firstname: event.target.value })
            }
            value={patient.firstname}
            name="firstname"
          ></input>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            onChange={(event) =>
              setPatient({ ...patient, lastname: event.target.value })
            }
            value={patient.lastname}
            name="lastname"
          ></input>
          <label htmlFor="postaladdress">Postal address</label>
          <input
            type="text"
            onChange={(event) =>
              setPatient({ ...patient, postaladdress: event.target.value })
            }
            value={patient.postaladdress}
            name="postaladdress"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(event) =>
              setPatient({ ...patient, email: event.target.value })
            }
            value={patient.email}
            name="email"
          ></input>
          <label htmlFor="telephone">Telephone</label>
          <input
            type="number"
            onChange={(event) =>
              setPatient({ ...patient, telephone: event.target.value })
            }
            value={patient.telephone}
            name="telephone"
          ></input>
          <label htmlFor="nextofkin">Next of kin</label>
          <input
            type="text"
            onChange={(event) =>
              setPatient({ ...patient, nextofkin: event.target.value })
            }
            value={patient.nextofkin}
            name="nextofkin"
          ></input>
          <label htmlFor="nextofkintel">Next of kin's telephone</label>
          <input
            type="text"
            onChange={(event) =>
              setPatient({ ...patient, nextofkintel: event.target.value })
            }
            value={patient.nextofkintel}
            name="nextofkinTel"
          ></input>
          <label htmlFor="bloodgroup">Blood group</label>
          <input
            type="text"
            onChange={(event) =>
              setPatient({ ...patient, bloodgroup: event.target.value })
            }
            value={patient.bloodgroup}
            name="bloodgroup"
          ></input>
          <button id="newpatient-btn" type="submit">
            Submit Entry
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPatient;
