import { QueryKeys } from '@/lib/react-query-keys';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { sendContactMessageFun } from '../api/services';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useSendContactMessage = () => {
    const navigate = useNavigate();
    const {mutate: sendContactMessage,isPending,error} = useMutation({
        mutationKey: [QueryKeys.contactUs],
        mutationFn: async (data) => await sendContactMessageFun(data),
        onSuccess: ()=> {
            // toast.success("تم ارسال الرساله بنجاح");
            navigate("/");
        }
    });


    return {
        sendContactMessage,
        isPending,
        error
    };
};

export default useSendContactMessage