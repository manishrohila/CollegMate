const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const database = require("./config/database");
const cloudinary = require("./config/cloudinary");

const cors = require('cors')

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors(
	{
		origin: "*",
		credentials: true,
	}
))

database.connect();
cloudinary.cloudinaryConnect();

const userRoutes = require("./routes/user");
const fileUploadRoutes = require("./routes/FileUpload");
const profileRoutes= require("./routes/Profile");
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/upload", fileUploadRoutes);
app.use("/api/v1/profile",profileRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});