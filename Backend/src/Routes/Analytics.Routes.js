let {Router} = require("express");
const { UserModel } = require("../model/User.model");
const AnalyticsRouter = Router();








AnalyticsRouter.get("/users",async (req, res) => {
 try {
    const User = await UserModel.find();
   
    res.status(200).send({msg: "User Data", data: User});
  } catch (err) {
    res.status(400).send({msg: "Error Users Not Found"});
  }




});

AnalyticsRouter.get("/users/top-active", (req, res) => {




});






AnalyticsRouter.get("/posts", (req, res) => {


});

AnalyticsRouter.get("/posts/top-liked", (req, res) => {});


module.exports={AnalyticsRouter}
