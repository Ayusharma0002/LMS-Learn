export const signUpFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "OTP",
    label: "OTP",
    placeholder: "Enter your otp",
    type: "password",
    componentType: "input",
  },
  // {
  //   name: "phoneNumber",
  //   label: "Phone Number",
  //   placeholder: "Enter your Phone Number",
  //   type: "number",
  //   componentType: "input",
  // },
  // {
  //   name: "title",
  //   label: "title",
  //   placeholder: "Enter your title",
  //   type: "text",
  //   componentType: "input",
  // },
  {
    name: "password",
    label: "Create Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
    validation: (password) => {
      if (password.length < 6) {
        return "Password must be at least 6 characters long.";
      }
      const allowedCharacters = /^[a-zA-Z0-9!@#$%^&*()_+={}:;"'<>,.?/\\|-]+$/;
      if (!allowedCharacters.test(password)) {
        return "Password can only contain letters, numbers, or special symbols.";
      }
      return null; // No errors
   
    },
  },
];
 // {
  //   name: "phone",
  //   label: "Phone",
  //   placeholder: "Enter your phone",
  //   type: "tel",
  //   componentType: "input",
  // },
  // {
  //   name: "password",
  //   label: "Create Password",
  //   placeholder: "Enter your password",
  //   type: "password",
  //   componentType: "input",
  // },

export const signInFormControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
  OTP: "",
  // title:"",
  // phoneNumber:"",  
};
export const otpFormControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "otp",
    label: "OTP",
    placeholder: "Enter your OTP",
    type: "text",
    componentType: "input",
  },
];

// Initial data for the OTP form
export const initialOtpFormData = {
  userEmail: "",
  otp: "",
};

export const languageOptions = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
  { id: "portuguese", label: "Portuguese" },
  { id: "arabic", label: "Arabic" },
  { id: "russian", label: "Russian" },
];

export const courseLevelOptions = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export const courseCategories = [
  { id: "web-development", label: "Web Development" },
  { id: "backend-development", label: "Backend Development" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "game-development", label: "Game Development" },
  { id: "software-engineering", label: "Software Engineering" },
];

export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Title",
    componentType: "input",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    componentType: "input",
    type: "text",
    placeholder: "Enter course subtitle",
  },
  {
    name: "description",
    label: "Description",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "pricing",
    label: "Pricing",
    componentType: "input",
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    componentType: "textarea",
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};



export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const filterOptions = {
  category: courseCategories,
  level: courseLevelOptions,
  primaryLanguage: languageOptions,
};




// export const liveSessionFormControls = [
//   {
//     name: "title",
//     label: "Session Title",
//     placeholder: "Enter the session title",
//     type: "text",
//     componentType: "input",
//   },
//   {
//     name: "instructorName",
//     label: "Instructor Name",
//     placeholder: "Enter instructor name",
//     type: "text",
//     componentType: "input",
//   },
//   {
//     name: "startDateTime",
//     label: "Start Date & Time",
//     placeholder: "Select start date and time",
//     type: "datetime-local",
//     componentType: "input",
//   },
//   {
//     name: "endDateTime",
//     label: "End Date & Time",
//     placeholder: "Select end date and time",
//     type: "datetime-local",
//     componentType: "input",
//   },
//   {
//     name: "description",
//     label: "Description",
//     placeholder: "Enter a brief description of the session",
//     type: "textarea",
//     componentType: "textarea",
//   },
// ];

// export const liveSessionInitialFormData = [{
//   title: "",
//   objective: "",
//   instructorName: "",
//   startDateTime: "",
//   endDateTime: "",
//   description: ""
// }];


export const liveSessionFormControls = [
  {
    name: "title",
    label: "Session Title",
    placeholder: "Enter the session title",
    type: "text",
    componentType: "input",
  },
  {
    name: "instructorName",
    label: "Instructor Name",
    placeholder: "Enter instructor name",
    type: "text",
    componentType: "input",
  },
  {
    name: "startDateTime",
    label: "Start Date & Time",
    placeholder: "Select start date and time",
    type: "datetime-local",
    componentType: "input",
  },
  {
    name: "endDateTime",
    label: "End Date & Time",
    placeholder: "Select end date and time",
    type: "datetime-local",
    componentType: "input",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter a brief description of the session",
    type: "textarea",
    componentType: "textarea",
  },
];
export const liveSessionInitialFormData = {
  title: "",
  instructorName: "",
  startDateTime: "",
  endDateTime: "",
  description: "",
};

export const courseCurriculumInitialFormData = [
  {
    title: "",
    videoUrl: "",
    freePreview: false,
    public_id: "",
    liveSession: { ...liveSessionInitialFormData },
  },
];