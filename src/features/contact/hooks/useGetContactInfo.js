import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getContactInfoFun } from '../api/services'

const useGetContactInfo = () => {
    const {data: contactInfo, isLoading, error} = useQuery({
        queryKey: ['contactInfo'],
        queryFn: getContactInfoFun
    })

    return {
        contactInfo,
        isLoading,
        error
    }
}

export default useGetContactInfo