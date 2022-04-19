const User = require ("../models/UserModelsDB")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const singup = async (req, res) => {
  const {username, password} = req.body;
 const newuser = new User({username, password});
 newuser.password = await newuser.encryptPassword(password)
  newuser.save()
 res.status(200).send("Su usuario ha sido registrado")
}

const singin = async (req, res) => {
  const {username, password} = req.body
  const newuser = await User.findOne({username});
  if(!newuser) {
   return  res.status(400).json("username o password incorrecto, proporcione uno valido");
}
  const autenticate = await newuser.confirmPassword(password)
  if(!autenticate){
   return  res.status(400).json("username o password incorrecto, proporcione uno valido");
  }
const token= jwt.sign({_id : newuser._id}, process.env.SECURE_KEY)
  if(!token){
      res.send("Hubo un problema intentelo nuevamente")
  }else {
      res.send(token)
      
  }
}

module.exports = {singin, singup};