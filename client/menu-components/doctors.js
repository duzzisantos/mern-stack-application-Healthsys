import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:4000/api/doctors";

const DoctorInfo = () => {
  const [doctor, setDoctor] = useState({
    doctorID: 0,
    docfirstname: "",
    doclastname: "",
    docemail: "",
    doctelephone: 0,
    specialization: "",
  });

  const handleSubmit = () => {
    console.log(doctor);
    axios
      .post(baseURL, doctor)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div id="doctor-info-form-wrapper">
        <form id="doctor-info-form" onSubmit={handleSubmit}>
          <h2>Enter new doctor information</h2>
          <label htmlFor="doctorID">Doctor ID</label>
          <input
            type="number"
            onChange={(event) =>
              setDoctor({ ...doctor, doctorID: event.target.value })
            }
            value={doctor.doctorID}
            name="doctorID"
          ></input>
          <label htmlFor="docfirstname">First name</label>
          <input
            type="text"
            onChange={(event) =>
              setDoctor({ ...doctor, docfirstname: event.target.value })
            }
            value={doctor.docfirstname}
            name="docfirstname"
          ></input>
          <label htmlFor="doclastname">Last name</label>
          <input
            type="text"
            onChange={(event) =>
              setDoctor({ ...doctor, doclastname: event.target.value })
            }
            value={doctor.doclastname}
            name="doclastname"
          ></input>
          <label htmlFor="docemail">Email</label>
          <input
            type="text"
            onChange={(event) =>
              setDoctor({ ...doctor, docemail: event.target.value })
            }
            value={doctor.docemail}
            name="docemail"
          ></input>
          <label htmlFor="doctelephone">Telephone</label>
          <input
            type="number"
            onChange={(event) =>
              setDoctor({ ...doctor, doctelephone: event.target.value })
            }
            value={doctor.doctelephone}
            name="doctelephone"
          ></input>
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            onChange={(event) =>
              setDoctor({ ...doctor, specialization: event.target.value })
            }
            value={doctor.specialization}
            name="specialization"
          ></input>
          <button id="doctor-info-btn" type="submit">
            Submit Entry
          </button>
        </form>
      </div>
    </>
  );
};

export default DoctorInfo;
