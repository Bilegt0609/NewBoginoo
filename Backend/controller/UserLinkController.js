const UrlModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

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

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(400).json({ message: "aldaa garlaa" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email: email,
      password: hashedPassword,
    });
    res.status(200).json({ success: true, data: newUser.email});
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const verifyUserLogin = async (email, password) => {
  try {
    const user = await UrlModel.findOne({ email });
    console.log(user);
    if (!user) {
      return { status: "error", error: "user not found" };
    }
    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(
        { id: user._id, username: user.email, type: "user" },
        "92F8509AB0F1BCC443546228DE803555671B555DE56F1141E54FEED09E3AF196",
        { expiresIn: "2h" }
      );
      return { status: "ok", data: token };
    }
    return { status: "error", error: "invalid password" };
  } catch (error) {
    console.log(error);
    return { status: "error", error: "timed out" };
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "invalid credentials" });
  }

  const match = await bcrypt.compare(password, user.password);
  const KEY =
    "92F8509AB0F1BCC443546228DE803555671B555DE56F1141E54FEED09E3AF196";
  if (match) {
    const token = jwt.sign({ id: user._id, email: user.email }, KEY, {
      expiresIn: "5m",
    });
    res.status(201).json({ message: "succesfuly sign in", token, email });
  }
  res.status(400).json({ message: "invalid credentials" });
};
