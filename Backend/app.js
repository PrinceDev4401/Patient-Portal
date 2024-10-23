const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { initDB } = require("./models");
const patientRoutes = require("./routes/patientRoutes");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "patient_portal",
  "postgres",
  "0555230618Lalafalamar",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Database connection error:", error));

const app = express();
app.use(cors());
app.use(bodyParser.json());

initDB(); // Sync the database

app.use("/patients", patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
