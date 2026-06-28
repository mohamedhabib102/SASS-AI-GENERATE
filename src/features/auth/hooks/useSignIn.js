import { useMutation } from "@tanstack/react-query";
import { Login } from "../api/service";
import { useNavigate } from "react-router-dom";
export const useSignIn = () => {
  
  const navigate = useNavigate();

  return useMutation({
    mutationFn: Login,

    onSuccess: (data) => {
    navigate("/")
    },

    onError: (error) => {
      console.log(error.response?.data);
    },
  });
};