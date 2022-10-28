const mongoose = require('mongoose');
// mongoose.set('debug', true);


const UsersSchema = new mongoose.Schema({
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

const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;