const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    minlength: 1,
    maxlength: 50,
    unique: true,
    required: true,
  },
  bio: {type: String, minlength: 0, maxlength: 200, required: false},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  postcount: {type: Number, default: 0},
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = {UserModel};
