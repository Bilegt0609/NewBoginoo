const UrlModel = require("../models/urlModel");

var crypto = require("crypto");

exports.getUsers = async (req, res) => {
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

exports.getLink = async (req, res) => {
  const original = req.params.original;
  const shortUrl = req.params.shortUrl;
  try {
    const url = await UrlModel.findOne({short: shortUrl})
    console.log(url)
    res.status(200).json({ success: true, data: url });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error
    });
  }
};

exports.createLinks = async (req, res) => {
  const original = req.body.original;
  const short = crypto.randomBytes(5).toString("hex");
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