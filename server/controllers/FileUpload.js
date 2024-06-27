const File = require("../models/FileUpload")
const cloudinary = require("cloudinary").v2;
//localfileUpload --> handler function

exports.localFileUpload = async (req, res) => {

     try {
        const {firstName,lastName, Department , subject , year} = req.body;
        const files = req.file;
        console.log("printing the file data ",req.file);
        console.log("file aa gayi ", files);
        console.log(req.body);
        if (!req.file) {
            throw new Error('File not uploaded');
        }
        const newFile = new File({
          
            firstName,
            lastName,
            Department,
            year,
            subject,
            filePath:files.path,
        });

        try {
            await newFile.save();
            return res.status(200).send('File uploaded and data saved!');
        } catch (error) {
            console.log("Printing error in saving data ", error.message);
            return res.status(500).send('Error saving data');
        }
    }
    catch (error) {
        console.log("Printing error in file uploading", error.message);
        return res.status(500).json({
            success: false,
            message: "file not uploaded",
        });
    }
}
