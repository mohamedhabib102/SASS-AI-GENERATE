import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'
import { VerifyOtp } from '../api/service';

const useVerifyOtp = () => {
    
    const navigate = useNavigate();
    const {mutate: verifyOtp, isPending, isError, error} = useMutation({
        mutationKey: ['verify-otp'],
        mutationFn: VerifyOtp,
        onSuccess: (data) => {
            const lang = localStorage.getItem('lang') || 'ar';
            sessionStorage.setItem('token', data?.token);
            navigate(`/${lang}/auth/reset-password`);
        },
        
    })

    return {verifyOtp, isPending, isError, error}


}

export default useVerifyOtp