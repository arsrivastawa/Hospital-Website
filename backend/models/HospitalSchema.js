const mongoose = require("mongoose");
const doctorSchema = require("./DoctorSchema");

const hospitalSchema = new mongoose.Schema(
  {
    HospitalDetail: {
      name: {
        type: String,
        required: true,
      },
      govtID: {
        type: String,
        required: true,
      },
      contactno: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
    },
    AddressDetail: {
      line1: {
        type: String,
        required: true,
      },
      line2: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      pin: {
        type: Number,
        required: true,
      },
      coordinates: {
        lati: {
          type: Number,
          required: true,
        },
        longi: {
          type: Number,
          required: true,
        },
      },
    },
    SPOCDetail: {
      firstname: {
        type: String,
        reuiqred: true,
      },
      lastname: {
        type: String,
        reuiqred: true,
      },
      mobile: {
        type: Number,
        reuiqred: true,
      },
      email: {
        type: String,
        reuiqred: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    DoctorDetail: [doctorSchema],
  },
  { collection: "doctor" }
);

const hospitalModel = mongoose.model("hospitalModel", hospitalSchema);

module.exports = hospitalModel;
