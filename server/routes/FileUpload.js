const express = require("express");
const router = express.Router();
const { auth, isStudent } = require("../middleware/auth");
const {localFileUpload } = require("../controllers/FileUpload");

const file = require("../models/FileUpload");

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

upload = multer({ storage: storage })

router.post("/localFileUpload", upload.single("file"),localFileUpload);




module.exports = router;