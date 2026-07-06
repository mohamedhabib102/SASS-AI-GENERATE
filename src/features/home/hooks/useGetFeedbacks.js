import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getTestimonial } from '../api/service'
import { QueryKeys } from '@/lib/react-query-keys';
import { useLang } from '@/hooks/useLang';

const useGetFeedbacks = ({ enabled = true } = {}) => {
    const {lang} = useLang();

    const [page,setPage] = useState(1);
    
    const {data: feedbacks ,isLoading ,isError} = useQuery({
        queryKey: [QueryKeys.feedbacks,page,lang],
        queryFn: () => getTestimonial(page),
        keepPreviousData: true,
        enabled
    })

    return {
        feedbacks,
        isLoading,
        isError,
        page,
        setPage
    }
}

export default useGetFeedbacks