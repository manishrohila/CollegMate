const express = require("express");
const router = express.Router()
//import controller
const {signup, login} = require("../controllers/Auth");

//define api routes
router.post("/signup", signup);
router.post("/login",login);


module.exports = router;
