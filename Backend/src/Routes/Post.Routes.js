let {Router} = require("express");
const {PostModel} = require("../model/Post.model");
const {UserModel} = require("../model/User.model");
const PostRouter = Router();

// ============ Add New Post ===========

PostRouter.post("/", async (req, res) => {
  let {postdata, Userid} = req.body;
  try {
    const Posts = new PostModel({
      user_id: Userid,
      content: postdata,
    });
    await Posts.save();
    const userpostcount = await UserModel.findById({_id: Userid});
    userpostcount.postcount++;
    await userpostcount.save();
    res.status(200).send({msg: "Post Added Sucessfully"});
  } catch (err) {
    res.status(400).send({msg: "Error  Not Found", Err: err});
  }
});

// ============ Get All Post ===========

PostRouter.get("/", async (req, res) => {
  try {
    const Post = await PostModel.find();
    res.status(200).send({msg: "Post Data", data: Post});
  } catch (err) {
    res.status(400).send({msg: "Error Post Data Not Found", Err: err});
  }
});

// ============ Update Post ===========

PostRouter.put("/:id", (req, res) => {
  let {id} = req.params;
  let {data} = req.body;
  try {
    const UpdatedPost = PostModel.findByIdAndUpdate({_id: id}, {data});
    res
      .status(200)
      .send({msg: "Post Updated Sucessfully !", data: UpdatedPost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

// ============ Delete Post ===========

PostRouter.delete("/:id", async (req, res) => {
  let {id} = req.params;
  try {
    const DeletedPost = await PostModel.findByIdAndDelete({_id: id});
    res.status(200).send({msg: "Post Deleted", DeletedPost: DeletedPost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

// ========= Like Post ============

PostRouter.put("/:id/like", async (req, res) => {
  let {id} = req.params;
  try {
    const LikedPost = await PostModel.findById({_id: id});
    LikedPost.likes++;
    await LikedPost.save();
    res.status(200).send({msg: "Post Like Sucessfully", data: LikedPost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Data: err});
  }
});

// ================ Unlike Post =============

PostRouter.put("/:id/unlike", async (req, res) => {
  let {id} = req.params;
  try {
    const UnlikePost = await PostModel.findById({_id: id});
    UnlikePost.likes--;
    await UnlikePost.save();
    res.status(200).send({msg: "Post Like Sucessfully", data: UnlikePost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Data: err});
  }
});

module.exports = {PostRouter};
