import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const MedicalRecords = ({ patientId }) => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch patient data when patientId changes
    axios
      .get(`http://localhost:5000/patients/${patientId}`)
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching patient data");
        setLoading(false);
      });
  }, [patientId]);

  if (loading) return <p>Loading patient data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="medical-records">
      {/* Display patient info sections here as done in the previous implementation */}
      <section className="patient-info">
        <h2>Patient Information</h2>
        <p>
          <strong>Full Name:</strong> {patient.fullName}
        </p>
        <p>
          <strong>Date of Birth:</strong> {patient.dateOfBirth}
        </p>
        <p>
          <strong>Gender:</strong> {patient.gender}
        </p>
        <p>
          <strong>Contact:</strong> {patient.contactEmail} |{" "}
          {patient.contactPhone}
        </p>
        <p>
          <strong>Address:</strong> {patient.address}
        </p>
        <p>
          <strong>Patient ID:</strong> {patient.id}
        </p>
      </section>

      {/* Other sections: Medical History, Medications, etc., as in the previous example */}
    </div>
  );
};

export default MedicalRecords;
