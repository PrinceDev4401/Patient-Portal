const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { initDB } = require("./models");
const patientRoutes = require("./routes/patientRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

initDB(); // Sync the database

app.use("/patients", patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
