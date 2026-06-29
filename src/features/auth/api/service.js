import { instanceAxios } from "@/lib/InstanceAxios";




const Login = async() => {
    // here logic endpoint login 
    const res = await instanceAxios.post(`api/auth/login`); // send data user like email and password
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
