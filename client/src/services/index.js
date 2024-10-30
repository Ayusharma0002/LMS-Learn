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