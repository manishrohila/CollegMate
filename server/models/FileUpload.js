const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({

  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    //required: true,
  },

  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  Department: {
    type: String,
    required: true,
    trim: true,
  }
  ,
  year: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  }
  ,
  fileName:{
    type:String,
},

  filePath: {
    type: String,
  },
  uploadedAt:
  {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("File", fileSchema);

