const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userEmail: String,
  orderStatus: String,
  paymentMethod: String,
  paymentStatus: String,
  orderDate: Date,
  paymentId: String,
  payerId: String,
  instructorId: String,
  instructorName: String,
  courseImage: String,
  courseTitle: String,
  courseId: String,
  coursePricing: String,
});

module.exports = mongoose.model("Order", OrderSchema);

// const mongoose = require("mongoose");


// const OrderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   userName: { type: String, required: true },
//   userEmail: { type: String, required: true, match: [/^\S+@\S+\.\S+$/, "Invalid email address"] },
//   orderStatus: { type: String, enum: ["created", "confirmed", "cancelled"], default: "created" },
//   paymentMethod: { type: String, enum: ["razorpay", "paypal", "stripe"], required: true },
//   paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
//   orderDate: { type: Date, default: Date.now },
//   paymentId: { type: String },
//   payerId: { type: String },
//   instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", required: true },
//   instructorName: { type: String, required: true },
//   courseImage: { type: String, required: true },
//   courseTitle: { type: String, required: true },
//   courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
//   coursePricing: { type: Number, required: true, min: 0 },
// }, { timestamps: true });



// module.exports = mongoose.model("Order", OrderSchema);

