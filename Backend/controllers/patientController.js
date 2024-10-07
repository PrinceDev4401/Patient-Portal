const { Patient } = require("../models");

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients" });
  }
};

// Add a new patient
exports.addPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      medicalHistory,
    } = req.body;
    const newPatient = await Patient.create({
      firstName,
      lastName,
      dateOfBirth,
      email,
      phoneNumber,
      address,
      medicalHistory,
    });
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: "Error adding patient" });
  }
};
