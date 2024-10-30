import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommonForm from "@/components/common-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls, otpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [loginType, setLoginType] = useState('password'); // Default login type
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
    setOtpFormData,
    otpFormData,
    handleOtpLoginUser,
    handleSendOtpForLogin
  } = useContext(AuthContext);

  function handleTabChange(value) {
    setActiveTab(value);
  }
  const toggleLoginType = () => {
    setLoginType((prevType) => (prevType === 'password' ? 'otp' : 'password'));
  };
  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  function checkIfSignInOtpFormIsValid() {
    console.log("otp form", otpFormData);
    return (
      otpFormData &&
      otpFormData.userEmail !== "" &&
      otpFormData.otp !== ""
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          {/* <GraduationCap className="h-10 w-8 mr-4" /> */}
          <img className="font-extrabold text-xl h-10 w-full" src="/logo.png"></img>
        </Link>
      </header>
      <div className="flex items-center justify-center  bg-background"
        style={{
          minHeight: "calc(100vh - 3.5rem)",
          backgroundImage: "url('/login-bg.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password or OTP to access your account
                </CardDescription>
              </CardHeader>
              {/* <CardContent className="space-y-2">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                  handleSubmit={handleLoginUser}
                />
                <CommonForm className="space-y-2"
                  formControls={otpFormControls}
                  buttonText={"Sign In With Otp"}
                  formData={otpFormData}
                  setFormData={setotpFormData}
                  isButtonDisabled={!checkIfSignInOtpFormIsValid()}
                  handleSubmit={handleOtpLoginUser}
                />
                <button onClick={handleSendOtpForLogin} className="text-blue-500">Send otp</button>
                <p>
                  Forgot Password{' '}
                  <button className="text-blue-500" onClick={toggleLoginType}>
                    {loginType === 'password' ? 'Login With OTP' : 'Login With Password'}
                  </button>
                </p>
              </CardContent> */}
              <CardContent className="space-y-2">
                {loginType === 'password' ? (
                  <CommonForm
                    formControls={signInFormControls}
                    buttonText={"Sign In"}
                    formData={signInFormData}
                    setFormData={setSignInFormData}
                    isButtonDisabled={!checkIfSignInFormIsValid()}
                    handleSubmit={handleLoginUser}
                  />
                ) : (
                  <>
                    <CommonForm
                      formControls={otpFormControls}
                      buttonText={"Sign In With OTP"}
                      formData={otpFormData}
                      setFormData={setOtpFormData}
                      isButtonDisabled={!checkIfSignInOtpFormIsValid()}
                      handleSubmit={handleOtpLoginUser}
                    />
                    <button onClick={handleSendOtpForLogin} className="text-blue-500">Send OTP</button>
                  </>
                )}
                <p>
                  Forgot Password{' '}
                  <button className="text-blue-500" onClick={toggleLoginType}>
                    {loginType === 'password' ? 'Login With OTP' : 'Login With Password'}
                  </button>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign Up"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
