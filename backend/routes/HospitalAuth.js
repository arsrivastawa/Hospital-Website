const { hashIt, compareIt } = require("../PasswordHasher/Password");
const { signToken } = require("../jwt/tokenSigner");
const hospitalModel = require("../models/HospitalSchema");
const setAddressData = require("../dataSetters/Address");
const setHospitalData = require("../dataSetters/Hospital");
const setSPOCData = require("../dataSetters/SPOC");
async function Signup(req, res) {
  const {
    hname,
    govtID,
    hContact,
    hEmail,
    hAdLine1,
    hAdLine2,
    hState,
    hDistrict,
    hPin,
    hCoord,
    spocFName,
    spocLName,
    spocMobile,
    spocEmail,
    password,
  } = req.body;
  const found = await hospitalModel.findOne({ govtID: govtID });
  if (found) {
    res.status(200).json({ state: "found" });
  } else {
    const [salt, hashedpassword] = hashIt(password);
    const inserted = await hospitalModel.insertMany({
      HospitalDetail: setHospitalData(hname, govtID, hContact, hEmail),
      AddressDetail: setAddressData(
        hAdLine1,
        hAdLine2,
        hState,
        hDistrict,
        hPin,
        hCoord
      ),
      SPOCDetail: setSPOCData(spocFName, spocLName, spocMobile, spocEmail),
      password: hashedpassword,
      salt: salt,
      DoctorDetail: [
        {
          firstname: "Shashank",
          lastname: "Shekhar",
          mobile: 8888888887,
          email: "doctor@gmail.com",
          specialization: "Nephrologist",
          medicalLicenseNo: "NMCXMCI3179",
          address: {
            line1: "Ganja Gali",
            line2: "Kasayin Muhalla",
            district: "Dhanabad",
            state: "Jharkhand",
            pin: 826001,
          },
          arrivingTime: new Date(1, 1, 2023, 9, 30),
          departingTime: new Date(1, 1, 2023, 22, 15),
          presence: true,
        },
      ],
    });
    console.log(inserted);
    // const token = signToken(uid);
    res.status(200).json({
      state: "done",
      //   token,
      //   userData: {
      //     username: inserted[0].name,
      //     useremail: inserted[0].email,
      //     uid: inserted[0].userID,
      //   },
    });
  }
}
async function Login(req, res) {
  const { email, password } = req.body;
  const found = await hospitalModel.findOne({ email: email });
  if (found) {
    const truePassword = compareIt(password, found.pass);
    if (truePassword) {
      const token = signToken(found.userID);
      res.status(200).json({
        state: "exist",
        token,
        userData: {
          username: found.name,
          useremail: found.email,
          uid: found.userID,
        },
      });
    } else {
      res.status(200).json({ state: "wrongPass" });
    }
  } else {
    res.status(200).json({ state: "doesNotExist" });
  }
  console.log(email, password);
}

module.exports = { Signup, Login };
