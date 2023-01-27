const express = require("express");
const {
  getUsers,
  createUser,
  logIn,
} = require("../controller/UserController");

const linkRouter = express.Router();

linkRouter
  .get("/", getUsers)
  .post("/register", createUser)
  .post("/login", logIn)


module.exports = linkRouter;