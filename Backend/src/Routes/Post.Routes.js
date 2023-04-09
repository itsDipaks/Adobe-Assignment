let {Router} = require("express");
const { PostModel } = require("../model/Post.model");

const PostRouter = Router();

PostRouter.post("/posts", (req, res) => {
  try {
    const Posts = new PostModel.find();
    res.status(200).send({msg: "Posts Data", posts: Posts});
  } catch (err) {
    res.status(400).send({msg: "Error Data Not Found", Err: err});
  }
});

PostRouter.get("/posts/:id", (req, res) => {
  let {id} = req.params;
  try {
    const Post = PostModel.findById({_id: id});
    res.status(200).send({msg: "Post Data", post: Post});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

PostRouter.put("/posts/:id", (req, res) => {
  let {id} = req.params;
  let {data} = req.body;
  try {
    const UpdatedPost = PostModel.findByIdAndUpdate({_id: id}, {data});
    res
      .status(200)
      .send({msg: "Post Updated Sucessfully !", UpdatedPost: UpdatedPost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

PostRouter.delete("/posts/:id", (req, res) => {
  let {id} = req.params;
  try {
    const DeletedPost = PostModel.findByIdAndDelete({_id: id});
    res.status(200).send({msg: "Post Deleted", DeletedPost: DeletedPost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

PostRouter.post("/posts/:id/like", (req, res) => {
  let {id} = req.params;
  try {
    const LikedPost = PostModel.findOneAndUpdate({_id: id});
    res.status(200).send({msg: "Post Like Sucessfully", LikedPost: LikedPost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

PostRouter.post("/posts/:id/unlike", (req, res) => {
  let {id} = req.params;
  try {
    const UnlikePost = PostModel.findOneAndUpdate({_id: id});
    res
      .status(200)
      .send({msg: "Post Like Sucessfully", UnlikePost: UnlikePost});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

// ======== Post Anyaletics ===========

PostRouter.get("/analytics/posts", (req, res) => {});

PostRouter.get("/analytics/posts/top-liked", (req, res) => {});

module.exports = {PostRouter};
