const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  bio: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  postcount:{type:Number,default:0}
});


const UserModel = mongoose.model("user", UserSchema);
module.exports = {UserModel};
