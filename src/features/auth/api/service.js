import { instanceAxios } from "@/lib/InstanceAxios";


const Login = async(data) => {
    const res = await instanceAxios.post(`/api/auth/login`, data);
    return res.data
}

const Register = async(data) => {
    const res = await instanceAxios.post(`/api/auth/register`, data);
    return res.data
}


const SendOtp = async(data) => {
    const res = await instanceAxios.post(`/api/auth/send-otp`, data);
    console.log(res.data)
    return res.data
}

const VerifyOtp = async(data) => {
    const res = await instanceAxios.post(`/api/auth/verify-otp`, data);
    return res.data
}

const SendNewPassword = async(data) => {
    const res = await instanceAxios.post(`/api/auth/change-password`, data);
    return res.data
}



export {
    Login,
    Register,
    SendOtp,
    VerifyOtp,
    SendNewPassword
}
