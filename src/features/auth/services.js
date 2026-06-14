import { instanceAxios } from "@/lib/InstanceAxios";




const Login = async() => {
    // here logic endpoint login 
    const res = await instanceAxios.post(`auth/login`); // send data user like email and password
    return res.data
}





export {
    Login
}
