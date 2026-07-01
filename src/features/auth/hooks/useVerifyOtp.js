import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VerifyOtp } from '../api/service';

const useVerifyOtp = () => {
    
    const navigate = useNavigate();
    const {mutate: verifyOtp, isPending, isError, error} = useMutation({
        mutationKey: ['verify-otp'],
        mutationFn: VerifyOtp,
        onSuccess: (data) => {
            // console.log(data);
            navigate('/auth/reset-password');
            sessionStorage.setItem('token', data?.token);
        },
        
    })

    return {verifyOtp, isPending, isError, error}


}

export default useVerifyOtp