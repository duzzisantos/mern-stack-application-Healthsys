import "./App.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

const baseURL = "http://localhost:4000/api/medrecords";

const MedicalRecord = () => {
  const [record, setRecord] = useState({
    patientID: 0,
    doctorID: 0,
    diagnosis: "",
    treatment_method: "",
    prognosis: "",
    prescriptions: "",
  });

  const handleSubmit = () => {
    console.log(record);
    axios
      .post(baseURL, qs.stringify(record))
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  return (
    <>
      <div id="record-form-wrapper">
        <form id="record-form" onSubmit={handleSubmit}>
          <h2>Enter medical record</h2>
          <label htmlFor="patientID">Patient ID</label>
          <input
            type="number"
            onChange={(event) =>
              setRecord({ ...record, patientID: event.target.value })
            }
            value={record.patientID}
            name="patientID"
          ></input>
          <label htmlFor="doctorID">Doctor ID</label>
          <input
            type="number"
            onChange={(event) =>
              setRecord({ ...record, doctorID: event.target.value })
            }
            value={record.doctorID}
            name="doctorID"
          ></input>
          <label htmlFor="diagnosis">Diagnosis</label>
          <input
            type="text"
            onChange={(event) =>
              setRecord({ ...record, diagnosis: event.target.value })
            }
            value={record.diagnosis}
            name="diagnosis"
          ></input>
          <label htmlFor="treatment_method">Treatment method</label>
          <input
            type="text"
            onChange={(event) =>
              setRecord({ ...record, treatment_method: event.target.value })
            }
            value={record.treatment_method}
            name="treatment_method"
          ></input>
          <label htmlFor="prognosis">Prognosis</label>
          <input
            type="text"
            onChange={(event) =>
              setRecord({ ...record, prognosis: event.target.value })
            }
            value={record.prognosis}
            name="prognosis"
          ></input>
          <label htmlFor="prescriptions">Prescriptions</label>
          <input
            type="text"
            onChange={(event) =>
              setRecord({ ...record, prescriptions: event.target.value })
            }
            value={record.prescriptions}
            name="prescriptions"
          ></input>
          <button id="record-btn" type="submit">
            Submit Entry
          </button>
        </form>
      </div>
    </>
  );
};

export default MedicalRecord;
