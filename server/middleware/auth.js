const User = require("../models/User");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

exports.auth = async (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            req.body.token ;
            console.log("printing req body", req.body,req.cookies);
        console.log("Printing token in middleware", token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing",
            });
        }

        try {
            // Await the verification promise
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            // console.log("getting details from token", decoded);
            req.user = decoded;
            next();
        } catch (error) {
            console.error("Error verifying token:", error);
            return res.status(401).json({
                message: "Token is invalid",
                success: false,
            });
        }
    } catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(500).json({
            success: false,
            message: `Something Went Wrong While Validating the Token`,
        });
    }
};


exports.isStudent = async (req, res, next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });

        if (userDetails.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a Protected Route for Students",
            });
        }
        next();
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: `User Role Can't be Verified` });
    }
};