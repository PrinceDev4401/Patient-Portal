const sequelize = require("../config/database");
const Patient = require("./patient");

const initDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

module.exports = { initDB, Patient };
