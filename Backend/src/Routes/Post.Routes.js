let {Router} = require("express");
const { PostModel } = require("../model/Post.model");
const PostRouter = Router();

PostRouter.post("/", async (req, res) => {
  let {postdata, Userid} = req.body;

  try {
    const Posts = new PostModel({
      user_id: Userid,
      content: postdata,
    });

    await Posts.save();
    res.status(200).send({msg: "Post Added Sucessfully"});
  } catch (err) {
    res.status(400).send({msg: "Error  Not Found", Err: err});
  }
});

PostRouter.get("/", async(req, res) => {
  try {
    const Post = await PostModel.aggregate([
      {
        '$lookup': {
          'from': 'users', 
          'localField': '_id:objectId', 
          'foreignField': 'user_id', 
          'as': 'usersdata'
        }
      }, {
        '$unwind': {
          'path': '$usersdata'
        }
      }, {
        '$project': {
          'content': true, 
          'likes': true, 
          '_id': true, 
          'user_id': true, 
          'created_at': true, 
          'updated_at': true, 
          'usersdata': true
        }
      }
    ]);
    res.status(200).send({msg: "Post Data", data: Post});
  } catch (err) {
    res.status(400).send({msg: "Error Post Data Not Found", Err: err});
  }
});



// PostRouter.get("/:id", (req, res) => {
//   let {id} = req.params;
//   try {
//     const Post = PostModel.findById({_id: id});
//     res.status(200).send({msg: "Post Data", post: Post});
//   } catch (err) {
//     res.status(400).send({msg: "Error Post Not Found", Err: err});
//   }
// });

// PostRouter.put("/:id", (req, res) => {
//   let {id} = req.params;
//   let {data} = req.body;
//   try {
//     const UpdatedPost = PostModel.findByIdAndUpdate({_id: id}, {data});
//     res
//       .status(200)
//       .send({msg: "Post Updated Sucessfully !", UpdatedPost: UpdatedPost});
//   } catch (err) {
//     res.status(400).send({msg: "Error Post Not Found", Err: err});
//   }
// });

// PostRouter.delete("/:id", (req, res) => {
//   let {id} = req.params;
//   try {
//     const DeletedPost = PostModel.findByIdAndDelete({_id: id});
//     res.status(200).send({msg: "Post Deleted", DeletedPost: DeletedPost});
//   } catch (err) {
//     res.status(400).send({msg: "Error Post Not Found", Err: err});
//   }
// });

// PostRouter.post("/:id/like", (req, res) => {
//   let {id} = req.params;
//   try {
//     const LikedPost = PostModel.findOneAndUpdate({_id: id});
//     res.status(200).send({msg: "Post Like Sucessfully", LikedPost: LikedPost});
//   } catch (err) {
//     res.status(400).send({msg: "Error Post Not Found", Err: err});
//   }
// });

// PostRouter.post("/:id/unlike", (req, res) => {
//   let {id} = req.params;
//   try {
//     const UnlikePost = PostModel.findOneAndUpdate({_id: id});
//     res
//       .status(200)
//       .send({msg: "Post Like Sucessfully", UnlikePost: UnlikePost});
//   } catch (err) {
//     res.status(400).send({msg: "Error Post Not Found", Err: err});
//   }
// });

// // ======== Post Anyaletics ===========

// PostRouter.get("/analytics/posts", (req, res) => {});

// PostRouter.get("/analytics/posts/top-liked", (req, res) => {});

module.exports = {PostRouter};
