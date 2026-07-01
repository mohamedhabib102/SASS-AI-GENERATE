import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SendNewPassword } from '../api/service';

const useSendNewPassword = () => {

    const navigate = useNavigate();

    const {mutate : sendNewPassword,isPending,error}=useMutation({
        mutationKey: ['send-new-password'],
        mutationFn: SendNewPassword,
        onSuccess : (data)=> {
            // console.log(data);
            navigate("/auth/sign-in");
        },
        
    })

    return {sendNewPassword,isPending,error}



}

export default useSendNewPassword