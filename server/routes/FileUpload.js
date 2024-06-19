const express = require("express");
const router = express.Router();
const {auth, isStudent} = require("../middleware/auth");
const { imageUpload, videoUpload, imageSizeReducer, localFileUpload } = require("../controllers/FileUpload");


router.post("/localFileUpload",auth,localFileUpload);
router.post("/imageUpload",auth, imageUpload);
router.post("/videoUpload",auth,videoUpload);
router.post("/imageSizeReducer",auth,imageSizeReducer);


module.exports = router;