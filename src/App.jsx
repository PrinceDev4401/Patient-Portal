import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Appointment from "./components/Appointment";
// import MedicalRecords from "./components/MedicalRecords";
import PatientSearch from "./components/PatientSearch";
import PatientList from "./components/PatientList";
import AddPatientForm from "./components/AddPatientForm";
import Addnavbar from "./components/AppNavbar";
import TypingDisplay from "./components/TypingDisplay";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [activeTab, setActiveTab] = useState("addPatient");

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
    <Router>
      <div className="App">
        <Addnavbar />

        {/* Tab buttons */}
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("addPatient")}>
            ADD NEW PATIENT
          </button>
          <button onClick={() => setActiveTab("appointment")}>
            APPOINTMENT
          </button>
          <button onClick={() => setActiveTab("medicalRecords")}>
            MEDICAL RECORDS
          </button>
        </div>

        <TypingDisplay
          text="God's Way Healthcare Center"
          typingSpeed={100}
          clearDelay={2000}
        />

        <Routes>
          <Route path="/appointment" element={<Appointment />} />
          {/* <Route path="/messages" element={<Message />} /> */}
        </Routes>

        {/* Display content based on the selected tab */}
        {activeTab === "addPatient" && (
          <>
            <AddPatientForm addPatient={addPatient} />
            <PatientList patients={patients} />
          </>
        )}
        {activeTab === "appointment" && <Appointment />}
        {activeTab === "medicalRecords" && <PatientSearch />}
      </div>
    </Router>
  );
}

export default App;
