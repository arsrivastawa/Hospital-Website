const app = require("./app/app");
const dotenv = require("dotenv");
const connectDatabase = require("./helperFunctions/dbConnect");
const { Signup, Login } = require("./routes/HospitalAuth");
const bp = require("body-parser");
const cors = require("cors");
const { verifyToken } = require("./jwt/tokenVerifier");
const { decode } = require("jsonwebtoken");
const hospitalModel = require("./models/HospitalSchema");

dotenv.config({ path: "config/config.env" });
app.use(cors());
app.use(bp.json());

connectDatabase();

app.post("/signup", (req, res) => {
  Signup(req, res);
});

app.post("/user", async (req, res) => {
  const { token } = req.body;
  const decoded = verifyToken(token);
  const found = await hospitalModel.findOne({
    userID: decoHospitalSchemaded.userID,
  });
  if (found) {
    res.status(200).json({
      username: found.name,
      useremail: found.email,
      uid: found.userID,
    });
  }
});

app.post("/login", (req, res) => {
  console.log(req.headers);
  Login(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started on ", process.env.PORT);
});
//
