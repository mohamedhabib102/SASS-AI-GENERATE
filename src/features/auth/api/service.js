import { instanceAxios } from "@/lib/InstanceAxios";


const Login = async(data) => {
    const res = await instanceAxios.post(`api/auth/login`, data);
    return res.data
}

const Register = async(data) => {
    const res = await instanceAxios.post(`api/auth/register`, data);
    return res.data
}


export {
    Login,
    Register
}
