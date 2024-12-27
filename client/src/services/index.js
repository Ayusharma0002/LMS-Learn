import axiosInstance from "@/api/axiosInstance";


export async function registerService(formData) {
    const { data } = await axiosInstance.post('/auth/register', {
        ...formData,
        role: 'user'
    })
    return data;
}

export async function loginService(formData) {
    
    const { data } = await axiosInstance.post('/auth/login', formData)
    return data;
}


export async function checkAuthService() {
    const { data } = await axiosInstance.get('/auth/check-auth')
    return data;
}


export async function mediaUploadService(formData
    , onProgressCallback) {
    const { data } = await axiosInstance.post("/media/upload", formData
    // );
        , {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgressCallback(percentCompleted);
      },
    });
  
    return data;
  }
  export async function mediaBulkUploadService(formData
    , onProgressCallback) {
    const { data } = await axiosInstance.post("/media/bulk-upload", formData
    // );
        , {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgressCallback(percentCompleted);
      },
    });
  
    return data;
  }



  export async function mediaDeleteService(id) {
    const { data } = await axiosInstance.delete(`/media/delete/${id}`);
  
    return data;
  }

//ye 9-12-24 ko add kiya file upload kai liye
  // export async function pdfUploadService(formData, onProgressCallback) {
  //   try {
  //     const { data } = await axiosInstance.post("/media/upload-pdf", formData, {
  //       onUploadProgress: (progressEvent) => {
  //         const percentCompleted = Math.round(
  //           (progressEvent.loaded * 100) / progressEvent.total
  //         );
  //         onProgressCallback(percentCompleted);
  //       },
  //     });
  
  //     return data;
  //   } catch (error) {
  //     console.error("Error uploading PDF:", error);
  //     throw error; // Optionally, handle errors here
  //   }
  // }


 export async function pdfUploadService (pdfFormData, progressCallback) {
    try {
      const response = await axios.post("/media/upload-pdf", pdfFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          progressCallback(percentage);
        },
      });
      console.log("Pdf res : ",response.data);
      
      return response.data; // Ensure the API returns a `success` flag and `data.url`.
    } catch (error) {
      console.error("Error uploading media:", error);
      throw error;
    }
  };
  

  export async function fetchInstructorCourseListService() {
    const { data } = await axiosInstance.get(`/instructor/course/get`);
  
    return data;
  }

  
  export async function addNewCourseService(formData) {
    const { data } = await axiosInstance.post(`/instructor/course/add`, formData);
    console.log("course data new : ",data);
    
    return data;
  }
  
  export async function fetchInstructorCourseDetailsService(id) {
    const { data } = await axiosInstance.get(
      `/instructor/course/get/details/${id}`
    );
  
    return data;
  }

  export async function updateCourseByIdService(id, formData) {
    const { data } = await axiosInstance.put(
      `/instructor/course/update/${id}`,
      formData
    );
  
    return data;
  }


  export async function fetchStudentViewCourseListService(query) {
    const { data } = await axiosInstance.get(`/student/course/get?${query}`);
  
    return data;
  }
  // export async function fetchStudentViewCourseListService() {
  //   const { data } = await axiosInstance.get(`/student/course/get`);
  
  //   return data;
  // }

  export async function fetchStudentViewCourseDetailsService(courseId) {
    const { data } = await axiosInstance.get(
      `/student/course/get/details/${courseId}`
    );
  
    return data;
  }


  export async function checkCoursePurchaseInfoService(courseId, studentId) {
    const { data } = await axiosInstance.get(
      `/student/course/purchase-info/${courseId}/${studentId}`
    );
  
    return data;
  }


  export async function getCurrentCourseProgressService(userId, courseId) {
    const { data } = await axiosInstance.get(
      `/student/course-progress/get/${userId}/${courseId}`
    );
  
    return data;
  }

  export async function markLectureAsViewedService(userId, courseId, lectureId) {
    const { data } = await axiosInstance.post(
      `/student/course-progress/mark-lecture-viewed`,
      {
        userId,
        courseId,
        lectureId,
      }
    );
  
    return data;
  }
  export async function resetCourseProgressService(userId, courseId){
    const { data } = await axiosInstance.post(
      `/student/course-progress/reset-progress`,{
      userId, courseId
    }
    );
  
    return data;
  }
  // export async function mediaBulkUploadService(formData, onProgressCallback) {
  //   const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
  //     onUploadProgress: (progressEvent) => {
  //       const percentCompleted = Math.round(
  //         (progressEvent.loaded * 100) / progressEvent.total
  //       );
  //       onProgressCallback(percentCompleted);
  //     },
  //   });
  
  //   return data;
  // }

//ye pahle vala tha
  // export async function createPaymentService(formData) {
  //   const { data } = await axiosInstance.post(`/student/order/create`, formData);
  
  //   return data;
  // }
  
  // export async function captureAndFinalizePaymentService(
  //   paymentId,
  //   payerId,
  //   orderId
  // ) {
  //   const { data } = await axiosInstance.post(`/student/order/capture`, {
  //     paymentId,
  //     payerId,
  //     orderId,
  //   });
  
  //   return data;
  // }




  // export async function fetchStudentBoughtCoursesService(studentId) {
  //   const { data } = await axiosInstance.get(
  //     `/student/courses-bought/get/${studentId}`
  //   );
  
  //   return data;
  // }

  
  // Service for creating a Razorpay order
  // export async function createPaymentService(formData) {
  //   const { data } = await axiosInstance.post(`/student/order/create`, formData);
  //   return data; // Returns the backend response containing Razorpay order details
  // }
  
  // // Service for capturing payment and finalizing the order
  // export async function captureAndFinalizePaymentService(
  //   razorpayPaymentId,
  //   razorpayOrderId,
  //   razorpaySignature,
  //   orderId
  // ) {
  //   const { data } = await axiosInstance.post(`/student/order/capture`, {
  //     razorpayPaymentId, // Razorpay Payment ID from the frontend
  //     razorpayOrderId, // Razorpay Order ID from the frontend
  //     razorpaySignature, // Razorpay Signature for verification
  //     orderId, // Backend-generated order ID
  //   });
  
  //   return data; // Returns the backend response confirming the order
  // }
  
  // // Service for fetching student-bought courses
  // export async function fetchStudentBoughtCoursesService(studentId) {
  //   const { data } = await axiosInstance.get(
  //     `/student/courses-bought/get/${studentId}`
  //   );
  //   return data; // Returns the list of courses bought by the student
  // }
  


  // Create Razorpay Order
export async function createPaymentService(formData) {
  try {
    const { data } = await axiosInstance.post(`/student/order/create`, formData);

    console.log(data,"create payment service hoo services/index.js ki mai")
    return data;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    throw new Error("Failed to initiate payment. Please try again.");
  }
}

// Capture and finalize the payment
export async function captureAndFinalizePaymentService(
  razorpayPaymentId,
  razorpayOrderId,
  razorpaySignature,
  orderId
) {
  try {
    const { data } = await axiosInstance.post(`/student/order/capture`, {
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      orderId,
    });
    console.log(data,"captureAndFinalizePaymentService service hoo services/index.js ki mai")
   
    return data;
  } catch (error) {
    console.error("Error capturing payment:", error);
    throw new Error("Failed to finalize payment. Please try again.");
  }
}

// Fetch Bought Courses
export async function fetchStudentBoughtCoursesService(studentId) {
  try {
    const { data } = await axiosInstance.get(`/student/courses-bought/get/${studentId}`);
    console.log(data,"fetchStudentBoughtCoursesService service hoo services/index.js ki mai")
    return data;
  } catch (error) {
    console.error("Error fetching student courses:", error);
    throw new Error("Failed to fetch courses. Please try again.");
  }
}





export async function sendOtpService(email) {
    console.log("Sending otp to email service", email);

    const response = await axiosInstance.post("/otp/send-otp", { email });
    return response.data;
}
export async function sendLoginOtpService(email) {
    console.log("Sending Login otp to email service", email);

    const response = await axiosInstance.post("/otp/send-login-otp", { email });
    return response.data;
}

export async function verifyOtpService(otp) {
    const response = await axiosInstance.post("/otp/verify-otp", { otp });
    return response.data;
}

export async function loginWithOtpService(formData) {
    const response = await axiosInstance.post("/auth/login-with-otp", formData);
    return response.data;
}