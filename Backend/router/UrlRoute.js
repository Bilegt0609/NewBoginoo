const express = require("express");
const {
  getLinks,
  getUrls,
  createLinks,
  deleteURL,
} = require("../controller/UrlController");

const linkRouter = express.Router();

linkRouter
.get("/url", getUrls)
  .get("/link", getLinks)
  .post("/link", createLinks)
  .delete("/link/:shortUrl", deleteURL)

module.exports = linkRouter;
