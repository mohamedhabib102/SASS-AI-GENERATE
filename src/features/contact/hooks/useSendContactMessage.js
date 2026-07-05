import { QueryKeys } from '@/lib/react-query-keys';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { sendContactMessageFun } from '../api/services';

const useSendContactMessage = () => {
    const {mutate: sendContactMessage,isPending,error} = useMutation({
        mutationKey: [QueryKeys.contactUs],
        mutationFn: async (data) => await sendContactMessageFun(data),
        // onSuccess: ()=> {
        // }
    });


    return {
        sendContactMessage,
        isPending,
        error
    };
};

export default useSendContactMessage