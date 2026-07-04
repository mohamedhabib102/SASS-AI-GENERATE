import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getTestimonial } from '../api/service'

const useGetFeedbacks = () => {

    const [page,setPage] = useState(1);
    
    const {data: feedbacks ,isLoading ,isError} = useQuery({
        queryKey: ['feedbacks',page],
        queryFn: () => getTestimonial(page),
        keepPreviousData: true,
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