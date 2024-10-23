const { Patient } = require("../models");
const { Sequelize } = require("sequelize");

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

// Get patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patientId = req.params.id;
    const patient = await Patient.findByPk(patientId); // Using Sequelize's findByPk
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patient data" });
  }
};

// Search patients by name
exports.searchPatientsByName = async (req, res) => {
  try {
    const { name } = req.query;
    console.log("Search query:", name); // Log the search query
    const patients = await Patient.findAll({
      where: {
        firstName: {
          [Sequelize.Op.iLike]: `%${name}%`, // Ensure this field matches your DB column
        },
      },
    });

    if (patients.length === 0) {
      console.log("No patients found for query:", name); // Log if no patients are found
    }

    res.status(200).json(patients);
  } catch (error) {
    console.error("Error retrieving patient data:", error); // Log the full error details
    res.status(500).json({ message: "Error retrieving patient data", error });
  }
};
