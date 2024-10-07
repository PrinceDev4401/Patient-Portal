import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientList from "./components/PatientList";
import AddPatientForm from "./components/AddPatientForm";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch all patients on component mount
    axios
      .get("http://localhost:5000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  // Function to handle adding new patients
  const addPatient = (newPatient) => {
    axios
      .post("http://localhost:5000/patients", newPatient)
      .then((response) => {
        setPatients([...patients, response.data]);
      })
      .catch((error) => console.error("Error adding patient:", error));
  };

  return (
    <div className="App">
      <AddPatientForm addPatient={addPatient} />
      <PatientList patients={patients} />
    </div>
  );
}

export default App;
