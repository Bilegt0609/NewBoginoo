const express = require("express");
const {
  getLinks,
  getLink,
  createLinks,
} = require("../controller/LInkController");

const linkRouter = express.Router();

linkRouter
  .get("/link", getLinks)
  .get("/link/:shortUrl", getLink)
  .post("/link", createLinks);

module.exports = linkRouter;
