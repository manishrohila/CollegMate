const File = require("../models/FileUpload")
const cloudinary = require("cloudinary").v2;
//localfileUpload --> handler function

exports.localFileUpload = async (req, res) => {
    
     try {
        const {firstName,lastName, Department , subject , year} = req.body;
        const files = req.file;
        console.log("printing the file data ",files);
        console.log("other data  ", req.body);

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
            return res.status(200).json({
                success:true,
                message: "file uploaded and data saved",
            });
        } catch (error) {
            console.log("Printing error in saving data ", error.message);
            return res.status(500).json({
                success:false,
                message:"Error in file data saving",
            });
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

exports.getSubjectName = async (req, res) => {
    try {
      const { Department } = req.query;
  
      // Validate required parameters
      if (!Department) {
        return res.status(400).json({
          success: false,
          message: "Missing required parameters: year and department",
        });
      }
  
      const response = await File.find({
        Department, 
      }).distinct('subject'); 

      return res.status(200).json({
        success: true,
        message: "Subject names found",
        subjects: response, // Rename 'response' to 'subjects' for clarity
      });
    } catch (error) {
      console.error("Error in getting subject names:", error.message);
      return res.status(500).json({
        success: false,
        message: "Subject names cannot be fetched",
      });
    }
  };
  