const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  }
});

const LoginModel = mongoose.model("logins", LoginSchema);
module.exports = LoginModel;
