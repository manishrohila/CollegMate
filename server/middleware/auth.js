const User = require("../models/User");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

exports.auth = async (req, res, next) => {

    try {

       const token = req.body.token ||
            req.cookies.token ||
            req.header("Authorization").replace("Bearer", " ");


        // console.log(req.cookies);
         console.log("printing token in auth.js ", token);
        if (!token) {
            return res.status(401).json({
                success: "false",
                message: "Token missing",
            })
        }

        try {
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("getting detaisl from token",decode);
            req.user = decode;
        }
        catch (error) {
            return res.status(401).json({
                message: "Token is invalid",
                success: "false",
            })
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: `Something Went Wrong While Validating the Token`,
        });
    }
}

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