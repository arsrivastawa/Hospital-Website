const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const hModel = require("./models/HospitalSchema");
const uri = process.env.CONNECTION_URI;

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(uri)
  .then((res) => {
    console.log("got Connected");
  })
  .catch((err) => {
    console.log("Not Connected\n", err);
  });

async function add() {
  const dct = new hModel({
    HospitalDetail: {
      name: "something",
      govtID: "126381fkjg",
      contactno: 1234567890,
      email: "abcd@example.com",
    },
    AddressDetail: {
      line1: "Hostel 26",
      line2: "BIT Sindri",
      state: "Jharkhand",
      district: "Dhanbad",
      pin: 828122,
      coordinates: {
        lati: 23.381923,
        longi: 34.323433,
      },
    },
    SPOCDetail: {
      firstname: "Aditya",
      lastname: "Ranjan",
      mobile: 9999999999,
      email: "arsrivastawa2710@gmail.com",
    },
    password: "qwertyui.gfdrtHBHGRTYT^7Re45yF",
    salt: "qwertyui.",
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
  return dct.save();
}

app.post("/aiseHi", (req, res) => {
  console.log("ha ji aa gaya");
  res.json({ done: "Got the Response" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
