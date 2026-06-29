import { useMutation } from "@tanstack/react-query";
import { Register } from "../api/service";
import { useNavigate } from "react-router-dom";



const useRegister = () => {
    const navigate = useNavigate()
    const {mutateAsync, error, isPending, isError } = useMutation({
        mutationFn: Register,
        onSuccess: (data) => {
            console.log(data)
            navigate("/")
        },
    });

    return {mutateAsync, error, isPending, isError }
}

export {
    useRegister
}