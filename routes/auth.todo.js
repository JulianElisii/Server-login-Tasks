const express = require ("express");
const router = express.Router();
const {singin, singup} = require ("../controllers/authcontrollers")


router.post("/singin", singin);


router.post("/singup", singup);


module.exports = router