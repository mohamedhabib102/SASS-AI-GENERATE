import { useMutation } from "@tanstack/react-query";
import { createCompanyProfile } from "../api/service";






const useCreateProfile = () => 
{
   return useMutation({
    mutationFn: createCompanyProfile
   })
};


export {
    useCreateProfile
}