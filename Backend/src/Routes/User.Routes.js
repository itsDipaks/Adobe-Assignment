let {Router} = require("express");
const {UserModel} = require("../model/User.model");
const UsersRouter = Router();

// ========== Add New User ==========
UsersRouter.post("/", async (req, res) => {
  let {email} = req.body;
  let isexist = await UserModel.findOne({email});
  if (isexist) {
    res.status(400).send({
      msg: "User Already Exist With this Email Plase Use Differant Email !!",
    });
  } else {
    const {name, email, bio} = req.body;

    try {
      if (email.includes("admin")) {
        admintrue = true;
      } else {
        admintrue = false;
      }
      let newuser = new UserModel({
        name,
        email,
        bio,
      });
      await newuser.save();

      res.status(200).send({msg: "User Added Sucessfully", data: newuser});
    } catch (err) {
      res
        .status(400)
        .send({msg: "something wents wrong to uploading the data"});
    }
  }
});

// ========== Get All Users ==========

UsersRouter.get("/", async (req, res) => {
  try {
    const User = await UserModel.find();
    res.status(200).send({msg: "User Data", data: User});
  } catch (err) {
    res.status(400).send({msg: "Error Users Not Found"});
  }
});

// ========== Get Selected User ==========

UsersRouter.get("/:id", async (req, res) => {
  let {id} = req.params;
  try {
    const User = await UserModel.findById({_id: id});
    res.status(200).send({msg: "User Data", User: User});
  } catch (err) {
    res.status(400).send({msg: "Error Users Not Found"});
  }
});

// ========== Update User ==========

UsersRouter.put("/:id", (req, res) => {
  let {id} = req.params;
  let {data} = req.body;
  try {
    const UpdatedUser = UserModel.findByIdAndUpdate({_id: id}, {data});
    res
      .status(200)
      .send({msg: "User Updated Sucessfully !", UpdatedUser: UpdatedUser});
  } catch (err) {
    res.status(400).send({msg: "Error Post Not Found", Err: err});
  }
});

// ========== Delete User ==========

UsersRouter.delete("/:id", async (req, res) => {
  let {id} = req.params;
  try {
    const DeletedUser = await UserModel.findByIdAndDelete({_id: id});
    res.status(200).send({msg: "Post Deleted", DeletedUser: DeletedUser});
  } catch (err) {
    res.status(400).send({msg: "Error User Not Found", Err: err});
  }
});

module.exports = {UsersRouter};
