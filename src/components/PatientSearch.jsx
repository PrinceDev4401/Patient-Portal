import React, { useState } from "react";
import axios from "axios";

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Initialize searchQuery state
  const [patients, setPatients] = useState([]);

  const handleSearch = () => {
    axios
      .get(`/patients/search`, { params: { name: searchQuery } })
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("Error searching for patients:", error);
      });
  };

  return (
    <div className="searchPatient">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
        placeholder="Search patients..."
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>

      <ul>
        {patients.map((patient, index) => (
          <li key={index}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientSearch;
