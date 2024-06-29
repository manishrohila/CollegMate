const express = require("express");
const router = express.Router();
const { localFileUpload, getSubjectName } = require("../controllers/FileUpload");
const path=require('path')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix +"-"+ file.originalname);
    },
});

 const upload = multer({
    storage: storage,
});

router.post("/localFileUpload", upload.single("file"), localFileUpload);

router.get("/getSubjectName",getSubjectName);


module.exports = router;