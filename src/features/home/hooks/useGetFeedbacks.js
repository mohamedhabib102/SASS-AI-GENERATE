import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getTestimonial } from '../api/service'
import { QueryKeys } from '@/lib/react-query-keys';

const useGetFeedbacks = ({ enabled = true } = {}) => {

    const [page,setPage] = useState(1);
    
    const {data: feedbacks ,isLoading ,isError} = useQuery({
        queryKey: [QueryKeys.feedbacks,page],
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