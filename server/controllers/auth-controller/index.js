const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const registerUser = async (req, res) => {
    const {
        userName,
        dateOfBirth,
        address,
        userEmail,
        phone,
        designation,
        organization,
        password,
        role
    } = req.body;

    // Check if a user with the same userName or userEmail already exists
    const existingUser = await User.findOne({
        $or: [{ userEmail }, { userName }]
    });

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User name or user email already exists"
        });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user with all the provided fields
    const newUser = new User({
        userName,
        dateOfBirth,
        address,
        userEmail,
        phone,
        designation,
        organization,
        role,
        password: hashPassword
    });

    // Save the new user
    await newUser.save();

    // Respond with success
    res.status(201).json({
        success: true,
        message: "User Registered Successfully"
    });
};


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