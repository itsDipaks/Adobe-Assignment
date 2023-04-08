let {Router} = require("express");
const { UserModel } = require("../Models/User.model");

const UsersRouter = Router();

UsersRouter.post("/users", (req, res) => {


});

UsersRouter.get("users/:id", (req, res) => {
    let {id} = req.params;
    try {
      const User = UserModel.findById({_id: id});
      res.status(200).send({msg: "User Data", User: User});
    } catch (err) {
      res.status(400).send({msg: "Error User Not Found", Err: err});
    }
});

UsersRouter.put("/users/:id", (req, res) => {
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

UsersRouter.delete("/users/:id", (req, res) => {
    let {id} = req.params;
    try {
      const DeletedUser = UserModel.findByIdAndDelete({_id: id});
      res.status(200).send({msg: "Post Deleted", DeletedUser: DeletedUser});
    } catch (err) {
      res.status(400).send({msg: "Error User Not Found", Err: err});
    }
});

//-------- ========Anyaletics============ --------

UsersRouter.get("/analytics/users", (req, res) => {});

UsersRouter.get("/analytics/users/top-active", (req, res) => {});

module.exports = {UsersRouter};
