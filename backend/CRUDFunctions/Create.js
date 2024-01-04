const hospitalModel = require("../models/HospitalSchema");

async function createHospital() {
  const dct = new hospitalModel({
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
    DoctorDetail: [],
  });
  return dct.save();
}

module.exports = createHospital;
/* {
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
}, */
