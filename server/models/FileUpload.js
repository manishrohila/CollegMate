const mongoose = require("mongoose");

const fileSchema = new mongoose.mongoose.Schema({

  firstName: {
    type: String,
   // required: true,
    trim: true,
  },
  lastName: {
    type: String,
    //required: true,
    trim: true,
  },
  Department: {
    type: String,
    //required: true,
    trim: true,
  }
  ,
  year: {
    type: String,
    //required: true,
    trim: true,
  },
  subject: {
    type: String,
    //required: true,
    trim: true,
  }
  ,
  filePath: {
    type: String,
  },
  uploadedAt:
  {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("file", fileSchema);

