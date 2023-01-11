const express = require("express");
const {
  getUsers,
  createUser,
  logIn,
} = require("../controller/UserLInkController");

const linkRouter = express.Router();

linkRouter
  .get("/user", getUsers)
  .post("/user", createUser)
  .post("/login", logIn)


module.exports = linkRouter;