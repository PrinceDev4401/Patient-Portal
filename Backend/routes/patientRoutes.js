const express = require("express");
const {
  getAllPatients,
  addPatient,
  getPatientById,
  searchPatientsByName,
} = require("../controllers/patientController");
const router = express.Router();

router.get("/", getAllPatients);
router.post("/", addPatient);
router.get("/:id", getPatientById); // Route to get patient by ID
router.get("/search", searchPatientsByName);

module.exports = router;
