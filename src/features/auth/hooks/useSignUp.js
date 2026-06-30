import { useMutation } from "@tanstack/react-query";
import { Register } from "../api/service";



const useRegister = () => {
return useMutation({
        mutationFn: Register
})}

export {
    useRegister
}