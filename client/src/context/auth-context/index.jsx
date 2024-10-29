// import { Skeleton } from "@/components/ui/skeleton";
// import { initialSignInFormData, initialSignUpFormData } from "@/config";
// import { checkAuthService, loginService, registerService } from "@/services";
// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext(null);

// export default function AuthProvider({ children }) {

//   const [loading, setLoading] = useState(true);
//   const [signInFormData, setSignInFormData] = useState(initialSignInFormData)
//   const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
//   const [auth, setAuth] = useState({
//     authenticate: false,
//     user: null
//   })

//   async function handleRegisterUser(event) {
//     event.preventDefault();
//     const data = await registerService(signUpFormData);
//     console.log("Reg data : ", data);

//   }
//   async function handleLoginUser(event) {
//     event.preventDefault();
//     const data = await loginService(signInFormData);
//     console.log("Login data : ", data);
//     if (data.success) {
//       sessionStorage.setItem('accessToken', JSON.stringify(data.data.accessToken))
//       setAuth({
//         authenticate: true,
//         user: data.data.user
//       })
//     } else {
//       setAuth({
//         authenticate: false,
//         user: null
//       })
//     }
//   }

//   //check auth user 
//   async function checkAuthUser() {
//     try {
//       const data = await checkAuthService();
//       console.log("auth data ---- : ", data);
//       if (data.success) {
//         setAuth({
//           authenticate: true,
//           user: data.data.user
//         })
//         setLoading(false)
//       } else {
//         setAuth({
//           authenticate: false,
//           user: null
//         })
//         setLoading(false)
//       }
//     } catch (error) {
//       console.log(error);
//       if(!error?.response?.data?.success){
//         setAuth({
//           authenticate: false,
//           user: null
//         })
//         setLoading(false)
//       }
//     }

//   }
//   useEffect(() => {
//     checkAuthUser();
//   }, [])
//   console.log("auth data : ", auth);

//   return <AuthContext.Provider value={{
//     signInFormData,
//     setSignInFormData,
//     signUpFormData,
//     setSignUpFormData,
//     handleRegisterUser,
//     handleLoginUser,
//     auth
//   }}>
//     {loading ? <Skeleton /> : children}</AuthContext.Provider>
// }


import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService, sendOtpService, verifyOtpService } from "@/services"; // Ensure to import OTP services
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({ authenticate: false, user: null });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const [isVerified, setIsVerified] = useState(false); // Track if OTP is verified

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);
    console.log("Reg data : ", data);
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);
    console.log("Login data : ", data);
    if (data.success) {
      sessionStorage.setItem('accessToken', JSON.stringify(data.data.accessToken));
      setAuth({ authenticate: true, user: data.data.user });
    } else {
      setAuth({ authenticate: false, user: null });
    }
  }

  async function handleSendOtp() {
    try {
      console.log("Sending otp to ", signUpFormData.userEmail);
      
      const data = await sendOtpService(signUpFormData.userEmail);
      console.log("Otp Response Data : ",data);
      
      if (data.success) {
        setOtpSent(true);
        console.log("OTP sent");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  }

  async function handleVerifyOtp() {
    try {
      const data = await verifyOtpService(otp);
      if (data.success) {
        setIsVerified(true);
        console.log("OTP verified");
      } else {
        console.log("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  }

  async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      console.log("auth data ---- : ", data);
      if (data.success) {
        setAuth({ authenticate: true, user: data.data.user });
        setLoading(false);
      } else {
        setAuth({ authenticate: false, user: null });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (!error?.response?.data?.success) {
        setAuth({ authenticate: false, user: null });
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  console.log("auth data : ", auth);

  return (
    <AuthContext.Provider value={{
      signInFormData,
      setSignInFormData,
      signUpFormData,
      setSignUpFormData,
      handleRegisterUser,
      handleLoginUser,
      handleSendOtp,
      handleVerifyOtp,
      otp,
      setOtp,
      otpSent,
      isVerified,
      auth
    }}>
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
