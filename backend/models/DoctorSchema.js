const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  medicalLicenseNo: {
    type: String,
    required: true,
  },
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
  },
  arrivingTime: {
    type: Date,
    required: true,
  },
  departingTime: {
    type: Date,
    required: true,
  },
  presence: {
    type: Boolean,
    required: true,
  },
});

module.exports = doctorSchema;
