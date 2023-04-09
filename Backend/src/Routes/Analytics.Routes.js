let {Router} = require("express");
const {UserModel} = require("../model/User.model");
const { PostModel } = require("../model/Post.model");
const AnalyticsRouter = Router();

AnalyticsRouter.get("/users", async (req, res) => {
  try {
    const User = await UserModel.find();

    res.status(200).send({msg: "User Data", data: User});
  } catch (err) {
    res.status(400).send({msg: "Error Users Not Found"});
  }
});

AnalyticsRouter.get("/users/top-active", async (req, res) => {
  try {
    const TopActiveUsers = await UserModel.find()
      .sort({postcount: -1})
      .limit(5);

    res.status(200).send({msg: "User Data", data: TopActiveUsers});
  } catch (err) {
    res.status(400).send({msg: "Error Users Not Found"});
  }
});




AnalyticsRouter.get("/posts",async (req, res) => {

    console.log("yes")
    try {
        const Posts = await PostModel.find();
        res.status(200).send({msg: "User Data", data: Posts});
      } catch (err) {
        res.status(400).send({msg: "Error Posts Not Found"});
      }

});

AnalyticsRouter.get("/posts/top-liked",async (req, res) => {
    try {
        const TopLikesPost = await PostModel.find()
          .sort({likes: -1})
          .limit(5);
    
        res.status(200).send({msg: "TopLikesPost Data", data: TopLikesPost});
      } catch (err) {
        res.status(400).send({msg: "Error TopLikesPost Not Found"});
      }

});

module.exports = {AnalyticsRouter};
