const jwt = require("jsonwebtoken")
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if(!token) return res.status(401).json("Access denied");

  const payload  = jwt.verify(token, process.env.SECURE_KEY  ) ; //Lo que hace verify es devolver todos los datos que contiene un token
  req.userId = payload._id
   next()

}

module.exports = {verifyToken}