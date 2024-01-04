const mg = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });
async function connectDatabase() {
  mg.connect(process.env.CONNECTION_URI)
    .then((res) => {
      console.log("Got It");
    })
    .catch((err) => {
      console.log("Error While Connecting", err);
    });
}

module.exports = connectDatabase;
