const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  hashedPassword: {
    type: String,
    unique: true,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  }
});

const RegisterModel = mongoose.model("Registers", RegisterSchema);
module.exports = RegisterModel;