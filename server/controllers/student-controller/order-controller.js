// const paypal = require("../../helpers/paypal");
// const Order = require("../../models/Order");
// const Course = require("../../models/Course");
// const StudentCourses = require("../../models/StudentCourses");
// const createOrder = async (req, res) => {
//   try {
    // const {
    //   userId,
    //   userName,
    //   userEmail,
    //   orderStatus,
    //   paymentMethod,
    //   paymentStatus,
    //   orderDate,
    //   paymentId,
    //   payerId,
    //   instructorId,
    //   instructorName,
    //   courseImage,
    //   courseTitle,
    //   courseId,
    //   coursePricing,
    // } = req.body;

//     const create_payment_json = {
//       intent: "sale",
//       payer: {
//         payment_method: "paypal",
//       },
//       redirect_urls: {
//         return_url: `${process.env.CLIENT_URL}/payment-return`,
//         cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
//       },
//       transactions: [
//         {
//           item_list: {
//             items: [
//               {
//                 name: courseTitle,
//                 sku: courseId,
//                 price: coursePricing,
//                 currency: "USD",
//                 quantity: 1,
//               },
//             ],
//           },
//           amount: {
//             currency: "USD",
//             total: coursePricing.toFixed(2),
//           },
//           description: courseTitle,
//         },
//       ],
//     };

//     paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
//       if (error) {
//         console.log(error);
//         return res.status(500).json({
//           success: false,
//           message: "Error while creating paypal payment!",
//         });
//       } else {
//         console.log("Info :", paymentInfo);
        
//         const newlyCreatedCourseOrder = new Order({
//           userId,
//           userName,
//           userEmail,
//           orderStatus,
//           paymentMethod,
//           paymentStatus,
//           orderDate,
//           paymentId,
//           payerId,
//           instructorId,
//           instructorName,
//           courseImage,
//           courseTitle,
//           courseId,
//           coursePricing,
//         });

//         await newlyCreatedCourseOrder.save();

//         const approveUrl = paymentInfo.links.find(
//           (link) => link.rel == "approval_url"
//         ).href;

//         res.status(201).json({
//           success: true,
//           data: {
//             approveUrl,
//             orderId: newlyCreatedCourseOrder._id,
//           },
//         });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const capturePaymentAndFinalizeOrder = async (req, res) => {
//   try {
//     const { paymentId, payerId, orderId } = req.body;

//     let order = await Order.findById(orderId);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order can not be found",
//       });
//     }

//     order.paymentStatus = "paid";
//     order.orderStatus = "confirmed";
//     order.paymentId = paymentId;
//     order.payerId = payerId;

//     await order.save();

//     //update out student course model
//     const studentCourses = await StudentCourses.findOne({
//       userId: order.userId,
//     });

//     if (studentCourses) {
//       studentCourses.courses.push({
//         courseId: order.courseId,
//         title: order.courseTitle,
//         instructorId: order.instructorId,
//         instructorName: order.instructorName,
//         dateOfPurchase: order.orderDate,
//         courseImage: order.courseImage,
//       });

//       await studentCourses.save();
//     } else {
//       const newStudentCourses = new StudentCourses({
//         userId: order.userId,
//         courses: [
//           {
//             courseId: order.courseId,
//             title: order.courseTitle,
//             instructorId: order.instructorId,
//             instructorName: order.instructorName,
//             dateOfPurchase: order.orderDate,
//             courseImage: order.courseImage,
//           },
//         ],
//       });

//       await newStudentCourses.save();
//     }

//     //update the course schema students
//     await Course.findByIdAndUpdate(order.courseId, {
//       $addToSet: {
//         students: {
//           studentId: order.userId,
//           studentName: order.userName,
//           studentEmail: order.userEmail,
//           paidAmount: order.coursePricing,
//         },
//       },
//     });

//     res.status(200).json({
//       success: true,
//       message: "Order confirmed",
//       data: order,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// module.exports = { createOrder, capturePaymentAndFinalizeOrder };











// const Razorpay = require("razorpay");
// // const Razorpay = require("../../helpers/paypal");
// const Order = require("../../models/Order");
// const Course = require("../../models/Course");
// const StudentCourses = require("../../models/StudentCourses");
// // Initialize Razorpay instance

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID, 
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

// const createOrder = async (req, res) => {
//   try {
//     // const {
//     //   userId,
//     //   userName,
//     //   userEmail,
//     //   courseId,
//     //   coursePricing,
//     // } = req.body;
//     const {
//       userId,
//       userName,
//       userEmail,
//       orderStatus,
//       paymentMethod,
//       paymentStatus,
//       orderDate,
//       paymentId,
//       payerId,
//       instructorId,
//       instructorName,
//       courseImage,
//       courseTitle,
//       courseId,
//       coursePricing,
//     } = req.body;

//     // Create Razorpay order
//     const razorpayOrder = await razorpay.orders.create({
//       amount: Math.round(coursePricing * 100), // Amount in smallest currency unit (paisa)
//       currency: "INR",
//       receipt: `receipt_${courseId}`,
//       notes: {
//         courseId: courseId,
//       },
//     });

//     if (!razorpayOrder) {
//       return res.status(500).json({
//         success: false,
//         message: "Error while creating Razorpay order!",
//       });
//     }

//     res.status(201).json({
//       success: true,
//       data: {
//         orderId: razorpayOrder.id,
//         amount: razorpayOrder.amount,
//         currency: razorpayOrder.currency,
//       },
//     });
//   } catch (err) {
//     console.log("Error creating order: ", err);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred!",
//     });
//   }
// };

// const capturePaymentAndFinalizeOrder = async (req, res) => {
//   try {
//     const { razorpayPaymentId, razorpayOrderId, orderId } = req.body;

//     let order = await Order.findById(orderId);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found!",
//       });
//     }

//     // Verify Razorpay payment
//     order.paymentStatus = "paid";
//     order.orderStatus = "confirmed";
//     order.paymentId = razorpayPaymentId;

//     await order.save();

//     console.log(order,"order order-controller.js")

//     // Update the StudentCourses model
//     const studentCourses = await StudentCourses.findOne({
//       userId: order.userId,
//     });

//     if (studentCourses) {
//       studentCourses.courses.push({
//         courseId: order.courseId,
//         title: order.courseTitle,
//         instructorId: order.instructorId,
//         instructorName: order.instructorName,
//         dateOfPurchase: order.orderDate,
//         courseImage: order.courseImage,
//       });

//       await studentCourses.save();
//     } else {
//       const newStudentCourses = new StudentCourses({
//         userId: order.userId,
//         courses: [
//           {
//             courseId: order.courseId,
//             title: order.courseTitle,
//             instructorId: order.instructorId,
//             instructorName: order.instructorName,
//             dateOfPurchase: order.orderDate,
//             courseImage: order.courseImage,
//           },
//         ],
//       });

//       await newStudentCourses.save();
//     }

//     // Update the Course model students list
//     await Course.findByIdAndUpdate(order.courseId, {
//       $addToSet: {
//         students: {
//           studentId: order.userId,
//           studentName: order.userName,
//           studentEmail: order.userEmail,
//           paidAmount: order.coursePricing,
//         },
//       },
//     });

//     res.status(200).json({
//       success: true,
//       message: "Order confirmed!",
//       data: order,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Some error occurred!",
//     });
//   }
// };

// module.exports = { createOrder, capturePaymentAndFinalizeOrder };

 const Razorpay = require("razorpay");
// const Razorpay = require("../../helpers/paypal");
const Order = require("../../models/Order");
const Course = require("../../models/Course");
const StudentCourses = require("../../models/StudentCourses");
// Initialize Razorpay instance



const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, 
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      userName,
      userEmail,
      courseId,
      coursePricing,
      instructorId,
      instructorName,
      courseImage,
      courseTitle,
    } = req.body;

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(coursePricing * 100), // Amount in paisa
      currency: "INR",
      receipt: `receipt_${courseId}`, // Custom receipt ID
      notes: {
        courseId,
        userId,
        userName,
      },
    });

    if (!razorpayOrder) {
      return res.status(500).json({
        success: false,
        message: "Error while creating Razorpay order!",
      });
    }

    // Save the order to the database
    const newOrder = new Order({
      userId,
      userName,
      userEmail,
      courseId,
      courseTitle,
      instructorId,
      instructorName,
      courseImage,
      coursePricing,
      orderStatus: "created", // Initial status
      paymentStatus: "pending", // Initial payment status
      paymentMethod: "razorpay",
      razorpayOrderId: razorpayOrder.id, // Save Razorpay order ID
    });

    await newOrder.save();

    // Respond with Razorpay order details
    res.status(201).json({
      success: true,
      data: {
        orderId: newOrder._id,
        razorpayOrderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
      },
    });
  } catch (err) {
    console.error("Error creating Razorpay order: ", err);
    res.status(500).json({
      success: false,
      message: "Some error occurred while creating the order!",
    });
  }
};


const crypto = require("crypto");

const capturePaymentAndFinalizeOrder = async (req, res) => {
  try {
    const { razorpayPaymentId, razorpayOrderId, razorpaySignature, orderId } = req.body;

    // Verify Razorpay payment signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(razorpayOrderId + "|" + razorpayPaymentId)
      .digest("hex");

    if (generatedSignature !== razorpaySignature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature!",
      });
    }

    // Find the order in the database
    let order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    // Update the order status
    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    order.paymentId = razorpayPaymentId;

    await order.save();

    // Update the StudentCourses model
    const studentCourses = await StudentCourses.findOne({ userId: order.userId });

    if (studentCourses) {
      studentCourses.courses.push({
        courseId: order.courseId,
        title: order.courseTitle,
        instructorId: order.instructorId,
        instructorName: order.instructorName,
        dateOfPurchase: new Date(),
        courseImage: order.courseImage,
      });

      await studentCourses.save();
    } else {
      const newStudentCourses = new StudentCourses({
        userId: order.userId,
        courses: [
          {
            courseId: order.courseId,
            title: order.courseTitle,
            instructorId: order.instructorId,
            instructorName: order.instructorName,
            dateOfPurchase: new Date(),
            courseImage: order.courseImage,
          },
        ],
      });

      await newStudentCourses.save();
    }

    // Update the Course model students list
    await Course.findByIdAndUpdate(order.courseId, {
      $addToSet: {
        students: {
          studentId: order.userId,
          studentName: order.userName,
          studentEmail: order.userEmail,
          paidAmount: order.coursePricing,
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Order confirmed!",
      data: order,
    });
  } catch (err) {
    console.error("Error capturing payment: ", err);
    res.status(500).json({
      success: false,
      message: "Some error occurred while finalizing the order!",
    });
  }
};


module.exports = { createOrder, capturePaymentAndFinalizeOrder };

