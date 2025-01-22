const User = require('../../models/User');
const Otp = require("../../models/Otp");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const registerUser = async (req, res) => {
//     console.log("Registration data:", req.body);
//     const { userName, userEmail, password, role, OTP } = req.body;

//     // Check if a user with the same userName or userEmail already exists
//      // Enhanced password validation
//      if (password.length < 6) {
//         return res.status(400).json({
//             success: false,
//             message: "Password must be at least 6 characters long."
//         });
//     }

//     const allowedCharacters = /^[a-zA-Z0-9!@#$%^&*()_+={}:;"'<>,.?/\\|-]+$/; // Letters, numbers, and special symbols
//     if (!allowedCharacters.test(password)) {
//         return res.status(400).json({
//             success: false,
//             message: "Password can only contain letters, numbers, or special symbols."
//         });
//     }
    
//     const existingUser = await User.findOne({
//         $or: [{ userEmail }, { userName }]
//     });

//     if (existingUser) {
//         return res.status(400).json({
//             success: false,
//             message: "Username or email already exists"
//         });
//     }

//     // Verify the OTP
//     const otpRecord = await Otp.findOneAndDelete({ email: userEmail, otp: OTP });

//     if (!otpRecord) {
//         return res.status(400).json({
//             success: false,
//             message: "Invalid or expired OTP"
//         });
//     }

//     // Hash the password
//     const hashPassword = await bcrypt.hash(password, 10);

//     // Create a new user with the provided fields
//     const newUser = new User({
//         userName,
//         userEmail,
//         role,
//         password: hashPassword
//     });

//     // Save the new user
//     await newUser.save();

//     // Respond with success
//     res.status(201).json({
//         success: true,
//         message: "User registered successfully"
//     });
// };


const registerUser = async (req, res) => {
    try {
      console.log("Registration data received:", req.body);
  
      const { userName, userEmail, password,
        // phoneNumber ,
        //  title, 
         role, OTP } = req.body;
  
      if (!userName || !userEmail || !password || !OTP 
        //  !phoneNumber ||
          // !title
        ) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }
  
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters long.",
        });
      }
  
      const allowedCharacters = /^[a-zA-Z0-9!@#$%^&*()_+={}:;"'<>,.?/\\|-]+$/;
      if (!allowedCharacters.test(password)) {
        return res.status(400).json({
          success: false,
          message: "Password can only contain letters, numbers, or special symbols.",
        });
      }
  
      // Check if user exists
      const existingUser = await User.findOne({
        $or: [{ userEmail }, { userName }],
      });
  
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Username or email already exists.",
        });
      }
  
      // Verify OTP
      const otpRecord = await Otp.findOneAndDelete({ email: userEmail, otp: OTP });
      if (!otpRecord) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired OTP.",
        });
      }
  
      // Hash password
      const hashPassword = await bcrypt.hash(password, 10);
  
      // Create user
      // const newUser = new User({
      //   userName,
      //   userEmail,
      //   password: hashPassword,
      //   role,
      // });
      const newUser = new User({
        userName,
        userEmail,
        password: hashPassword,
        // title,
        // phoneNumber,
        role,
      });
  
      await newUser.save();
  
      return res.status(201).json({
        success: true,
        message: "User registered successfully.",
      });
    } catch (error) {
      console.error("Error during user registration:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  };
  

const loginUser = async (req, res) => {
    console.log("Pass login req", req.body);
    const { userEmail, password } = req.body;
    const checkUser = await User.findOne({ userEmail });
    console.log("User: ", userEmail, checkUser);

    if (!checkUser) {
        return res.status(401).json({
            success: false,
            message: "User not found", // Message should be here
        });
    }
    
    const isPasswordValid = await bcrypt.compare(password, checkUser.password);
    
    if (!isPasswordValid) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials", // Message should be here
        });
    }
    

    // const accessToken = jwt.sign({
    //     _id: checkUser._id,
    //     userName: checkUser.userName,
    //     userEmail: checkUser.userEmail,
    //     role: checkUser.role
    // }, 'JWT_SECRET', { expiresIn: '120m' })
    const accessToken = jwt.sign({
      _id: checkUser._id,
      userName: checkUser.userName,
      userEmail: checkUser.userEmail,
      // phoneNumber:checkUser.phoneNumber,
      // title:checkUser.title,
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
                // phoneNumber:checkUser.phoneNumber,
                // title:checkUser.title,
                role: checkUser.role
            }
        }
    })
}
const loginWithOtp = async (req, res) => {

    console.log("Otp login req", req.body);

    const { userEmail, otp } = req.body;

    // Check and delete OTP after verifying
    const otpRecord = await Otp.findOneAndDelete({ email: userEmail, otp });
    if (!otpRecord) {
        return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    // Find the user by email
    const user = await User.findOne({ userEmail });
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    // Generate a JWT token upon successful OTP verification
    const accessToken = jwt.sign(
        { _id: user._id, userName: user.userName, userEmail: user.userEmail, role: user.role 
          // , 
          // phoneNumber:user.phoneNumber
          // ,
      // title:user.title
     },
        'JWT_SECRET', { expiresIn: '120m' }
    );

    res.status(200).json({
        success: true,
        message: "Logged in successfully with OTP",
        data: { accessToken, user: { _id: user._id, userName: user.userName, userEmail: user.userEmail, role: user.role 
          // ,
          // phoneNumber:user.phoneNumber
          // ,
      // title:user.title 
    } }
    });
};


module.exports = { registerUser, loginUser, loginWithOtp }