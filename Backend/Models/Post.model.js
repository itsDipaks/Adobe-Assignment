const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user_id: {type: String, required: true},
  content: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  likes: {type: Number, default: 0},
});
const PostModel = mongoose.model("Post", PostSchema);
module.exports = {PostModel};
