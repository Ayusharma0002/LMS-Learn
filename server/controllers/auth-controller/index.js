const User = require('../../models/User');
const Otp = require("../../models/Otp");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    console.log("Registration data:", req.body);
    const { userName, userEmail, password, role, OTP } = req.body;

    // Check if a user with the same userName or userEmail already exists
    const existingUser = await User.findOne({
        $or: [{ userEmail }, { userName }]
    });

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "Username or email already exists"
        });
    }

    // Verify the OTP
    const otpRecord = await Otp.findOneAndDelete({ email: userEmail, otp: OTP });

    if (!otpRecord) {
        return res.status(400).json({
            success: false,
            message: "Invalid or expired OTP"
        });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user with the provided fields
    const newUser = new User({
        userName,
        userEmail,
        role,
        password: hashPassword
    });

    // Save the new user
    await newUser.save();

    // Respond with success
    res.status(201).json({
        success: true,
        message: "User registered successfully"
    });
};

module.exports = { registerUser };

const loginUser = async (req, res) => {
    const { userEmail, password } = req.body;
    const checkUser = await User.findOne({ userEmail });
    // console.log("User: ",userEmail,checkUser);
    
    if (!checkUser || !(bcrypt.compare(password, checkUser.password))) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials",
        })
    }

    const accessToken = jwt.sign({
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        role: checkUser.role
    }, 'JWT_SECRET', { expiresIn: '120m' })

    res.status(200).json({
        success: true,
        message: "Logged In Successfully",
        data: {
            accessToken,
            user: {
                _id: checkUser._id,
                userName: checkUser.userName,
                userEmail: checkUser.userEmail,
                role: checkUser.role
            }
        }
    })
}


module.exports = { registerUser, loginUser }