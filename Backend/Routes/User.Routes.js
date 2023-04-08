let {Router} = require("express");

const UsersRouter = Router();

UsersRouter.post("/users", (req, res) => {});

UsersRouter.get("users/:id", (req, res) => {});

UsersRouter.put("/users/:id", (req, res) => {});

UsersRouter.delete("/users/:id", (req, res) => {});

//-------- ========Anyaletics============ --------

UsersRouter.get("/analytics/users", (req, res) => {});

UsersRouter.get("/analytics/users/top-active", (req, res) => {});

module.exports = {UsersRouter};
