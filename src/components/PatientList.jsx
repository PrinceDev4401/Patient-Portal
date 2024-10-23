import React from "react";
import "../App.css";

const PatientList = ({ patients }) => {
  return (
    <div className="all-patients">
      <h2 className="head">ALL PATIENTS</h2>
      {patients.length > 0 ? (
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.firstName} {patient.lastName} - {patient.phoneNumber} -{" "}
              {patient.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No patients found.</p>
      )}
    </div>
  );
};

export default PatientList;
