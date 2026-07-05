import { instanceAxios } from "@/lib/InstanceAxios";


const Login = async(data) => {
    const res = await instanceAxios.post(`/api/auth/login`, data);
    return res.data
}

const Register = async(data) => {
    const res = await instanceAxios.post(`/api/auth/register`, data);
    return res.data
}


const SendOtp = async(data) => await instanceAxios.post(`/api/auth/send-otp`, data)
.then((res) => res.data);

const VerifyOtp = async(data) => await instanceAxios.post(`/api/auth/verify-otp`, data)
.then((res) => res.data);

const SendNewPassword = async(data) => await instanceAxios.post(`/api/auth/change-password`, data,{
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    }).then((res) => res.data);



export {
    Login,
    Register,
    SendOtp,
    VerifyOtp,
    SendNewPassword
}