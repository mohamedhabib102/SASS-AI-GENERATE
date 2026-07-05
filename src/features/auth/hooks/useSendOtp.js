import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SendOtp } from '../api/service';
import { useMutation } from '@tanstack/react-query';




const useSendOtp = () => {
    const navigate = useNavigate();

    const {mutate: sendOtp, isPending, isError, error} = useMutation({
        mutationKey: ['send-otp'],
        mutationFn: SendOtp,
        onSuccess: (data) => {
            navigate('/auth/otp-code');
        }
    });

    return { sendOtp, isPending, isError, error };
}

export default useSendOtp