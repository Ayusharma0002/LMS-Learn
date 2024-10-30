const Otp = require("../../models/Otp");
const nodemailer = require("nodemailer");
const User = require('../../models/User');
exports.sendOtp = async (req, res) => {
  console.log("Request: ", req.body); // Log the entire request body

  const { email } = req.body;
  console.log("User Email: ", email);

  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
  console.log("OTP: ", otp);
  const startTime = new Date();
  console.log("Start Time:", startTime.toLocaleTimeString());
  try {
    await Otp.create({ email, otp });

    // Configure your mailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "samvit.online1@gmail.com", // Use your email here
        pass: "fcoo erdf tgdl pjnv", // Ensure this is correct
      },
      pool: true,
      rateLimit: 1,
    });

    const mailOptions = {
      from: "samvit.online1@gmail.com", // Set from to a valid email for testing
      to: email,
      subject: "Testing... Your OTP Code For Samvit Lms",
      text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("OTP email sent to: ", email); // Log success


    const endTime = new Date();
    console.log("End Time:", endTime.toLocaleTimeString());
    const differenceInMs = endTime - startTime;
    const differenceInSeconds = Math.floor(differenceInMs / 1000);
    console.log("Difference:", differenceInSeconds, "seconds");


    res.status(200).json({
      success: true,
      message: "OTP sent successfully"
    });
  } catch (error) {
    console.error("Error sending email: ", error); // Log the error details
    res.status(500).json({
      message: "Error sending OTP",
      success: false,
      error: error.message
    });
  }
};

exports.sendLoginOtp = async (req, res) => {
  console.log("Request: ", req.body); // Log the entire request body

  const { email } = req.body;
  console.log("User Email: ", email);

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found. Please check your email.");
      return res.status(404).json({
        success: false,
        message: "User not found. Please check your email.",
      });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
    console.log("OTP: ", otp);
    const startTime = new Date();
    console.log("Start Time:", startTime.toLocaleTimeString());

    // Store the OTP in the database
    await Otp.create({ email, otp });

    // Configure your mailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "samvit.online1@gmail.com", // Use your email here
        pass: "fcoo erdf tgdl pjnv", // Ensure this is correct
      },
      pool: true,
      rateLimit: 1,
    });

    const mailOptions = {
      from: "samvit.online1@gmail.com", // Set from to a valid email for testing
      to: email,
      subject: "Your OTP Code For Samvit LMS",
      text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("OTP email sent to: ", email); // Log success

    const endTime = new Date();
    console.log("End Time:", endTime.toLocaleTimeString());
    const differenceInMs = endTime - startTime;
    const differenceInSeconds = Math.floor(differenceInMs / 1000);
    console.log("Difference:", differenceInSeconds, "seconds");

    res.status(200).json({
      success: true,
      message: "OTP sent successfully"
    });
  } catch (error) {
    console.error("Error sending email: ", error); // Log the error details
    res.status(500).json({
      message: "Error sending OTP",
      success: false,
      error: error.message
    });
  }
};


exports.verifyOtp = async (req, res) => {
  console.log("Verify Req : ",req);
  
  const { userEmail, otp } = req.body;
  const otpRecord = await Otp.findOneAndDelete({ userEmail, otp });

  if (otpRecord) {
    res.status(200).json({
      success: true,
      message: "OTP verified successfully"
    });
  } else {
    res.status(400).json({
      message: "Invalid or expired OTP",
      success: false,
    });
  }
};
