const UrlModel = require("../models/urlModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

var crypto = require("crypto");

exports.getLinks = async (req, res) => {
  const bearerHeader = req.headers?.authorization;

  if (!bearerHeader) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }

  const token = bearerHeader.split(" ");
  const bearerToken = token[1];

  jwt.verify(bearerToken, process.env.TOKEN_KEY, function (err, decoded) {
    console.log(err, decoded)
    if (err) {
      res.status(401).json({
        error: "Unauthorized",
      });
      return;
    } else {
      res.status(200).json({
        success: true,
        token: decoded,
      });
    }
  });
};

exports.getUrls = async (req, res) => {
  try {
    const data = await UrlModel.find({});
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

exports.createLinks = async (req, res) => {
  const original = req.body.original;
  // const short = crypto.randomBytes(5).toString("hex");
  const short = req.body.short;
  try {
    const newUrl = await UrlModel.create({ original: original, short: short });
    res.status(200).json({ success: true, data: newUrl });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

exports.deleteURL = async (req, res) => {
  const deletedURL = req.params.shortUrl;
  try {
    res.status(200).json({ success: true, data: deletedURL });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
