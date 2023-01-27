const express = require("express");
const {
  getLinks,
  createLinks,
  deleteURL,
} = require("../controller/UrlController");

const linkRouter = express.Router();

linkRouter
  .get("/link", getLinks)
  .post("/link", createLinks)
  .delete("/link/:shortUrl", deleteURL)

module.exports = linkRouter;
