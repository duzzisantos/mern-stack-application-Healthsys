import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const RecordsTable = () => {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");

  const getRecord = async () => {
    try {
      const data = await axios.get("http://localhost:4000/api/medrecords");
      console.log(data.data);
      setRecord(data.data);
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteById = (_id) => {
    axios
      .delete(`http://localhost:4000/api/medrecords/${_id}`)
      .then((response) => {
        console.log("Deleting", response);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  useEffect(() => {
    getRecord();
  }, []);

  return (
    <div className="table-wrapper">
      <h3>Medical Records Database</h3>
      <div id="form-wrapper-crud3">
        <label htmlFor="search" className="search-label">
          Find:
        </label>
        <input
          type="search"
          placeholder="Filter by Patient ID"
          className="search-record"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <TableContainer component={Paper} style={{ marginLeft: "0px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Patient ID</StyledTableCell>
              <StyledTableCell align="right">Doctor ID</StyledTableCell>
              <StyledTableCell align="right">Diagnosis</StyledTableCell>
              <StyledTableCell align="right">Treatment method</StyledTableCell>
              <StyledTableCell align="right">Prognosis</StyledTableCell>
              <StyledTableCell align="right">Prescription</StyledTableCell>
              <StyledTableCell align="right">Remove</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {record
              .filter((item) =>
                search === ""
                  ? item
                  : search.match(new RegExp(`${item.patientID}`), "gi")
                  ? item
                  : !item
              )
              .map((item) => {
                return (
                  <StyledTableRow key={item._id}>
                    <StyledTableCell component="th" scope="row">
                      {item.patientID}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.doctorID}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.diagnosis}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.treatment_method}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.prognosis}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.prescriptions}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={(e) => handleDeleteById(item._id)}
                      >
                        Delete
                      </button>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button
                        type="button"
                        className="btn-update"
                        onClick={(e) => handleDeleteById(item._id)}
                      >
                        Update
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecordsTable;
