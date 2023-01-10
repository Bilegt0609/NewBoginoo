const express = require("express");
const {
  getLinks,
  getLink,
  createLinks,
  deleteURL,
} = require("../controller/UrlLInkController");

const linkRouter = express.Router();

linkRouter
  .get("/link", getLinks)
  .get("/link/:shortUrl", getLink)
  .post("/link", createLinks)
  .delete("/link/:shortUrl", deleteURL)

module.exports = linkRouter;