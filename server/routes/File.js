const express = require("express");
const router = express.Router();
const { localFileUpload, getSubjectName, getFilesByDepartmentAndSubject } = require("../controllers/File");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { auth } = require("../middleware/auth");

// Ensure the destination folder exists
const filesDir = path.join(__dirname, "..", "files");
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filesDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage,
});

// Routes
router.post("/localFileUpload", auth, upload.single("file"), localFileUpload);
router.get("/getSubjectName", getSubjectName);
router.get("/getFilesByDepartmentAndSubject", getFilesByDepartmentAndSubject);

module.exports = router;
