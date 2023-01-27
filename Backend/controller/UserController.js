const UrlModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
require("dotenv").config();

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

// exports.getUser = async (req, res) => {
//   const 
//   try {
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// };


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
    res.status(200).json({ success: true, data: newUser.email });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "invalid credentials" });
  }

  const user = await UserModel.findOne({ email });
  if (!user) {
   return res.status(400).json({ message: "invalid credentials" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
   return  res.status(400).json({ message: "invalid credentials" });
  }
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: "1h",
    }
  );
  res.status(201).json({ message: "succesfuly sign in", token, email });
};