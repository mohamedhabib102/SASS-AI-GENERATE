import { useMutation } from "@tanstack/react-query";
import { Register } from "../api/service";



const useRegister = () => {
    const regitred =  useMutation({
        mutationFn: Register,

    });


    return {
        mutate: regitred.mutateAsync,
        loading: regitred.isPending,
        isError: regitred.isError,
        error:regitred.error    
    }
}


export {
    useRegister
}