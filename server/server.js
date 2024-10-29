require("dotenv").config();

const express=require("express");
const cors=require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth-routes')
const otpRoutes = require("./routes/otp-routes");
const app=express();
const PORT=process.env.PORT || 5000; 


app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());
  

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/lmsportal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


app.use("/otp", otpRoutes); 
app.use('/auth',authRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});