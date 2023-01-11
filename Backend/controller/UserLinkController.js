const UrlModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  const email = req.body.email;
  const password = req.body.password;
  try {
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await UrlModel.create({ email: email, password: hashedPassword });
    res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
const verifyUserLogin = async (email,password)=>{
  try {
      const user = await UrlModel.findOne({email});
      console.log(user);
      if(!user){
          return {status:'error',error:'user not found'}
      }
      if(await bcrypt.compare(password,user.password)){
          // creating a JWT token
          let token = jwt.sign({id:user._id,username:user.email,type:'user'},"92F8509AB0F1BCC443546228DE803555671B555DE56F1141E54FEED09E3AF196",{ expiresIn: '2h'})
          return {status:'ok',data:token}
      }
      return {status:'error',error:'invalid password'}
  } catch (error) {
      console.log(error);
      return {status:'error',error:'timed out'}
  }
}

// login 
exports.logIn = async(req,res)=>{
  const {email,password}=req.body;
  const response = await verifyUserLogin(email,password);
  if(response.status==='ok'){
    console.log('logged in');
      res.status(200).json({
        message: "Successfully Logged In"
      })
  }else{
      res.json(response);
  }
};