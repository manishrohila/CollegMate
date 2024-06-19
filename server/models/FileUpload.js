const mongoose = require("mongoose");

const fileSchema = new mongoose.mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        //required:true,
    },
    filename: {
        type: String,
        required: true,
    },
    originalName:{
        type:String,

    },
    mimetype: {
        type:String,
    },
    size: {
        type:Number,
    },
    imageUrl: {
        type: String
    },
    uploadedAt:
    {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("file", fileSchema);

