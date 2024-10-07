import React, { useState } from "react";

const AddPatientForm = ({ addPatient }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(formData);
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      address: "",
      medicalHistory: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>ADD NEW PATIENT</h2>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Patient First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Patient Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Date of Birth</span>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter Patient email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter Patient Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input
              type="text"
              name="address"
              placeholder="Enter Patient Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <span className="detailsMH">Medical History</span>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
            />
          </div>
          <button className="button" type="submit">
            Add Patient
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientForm;
