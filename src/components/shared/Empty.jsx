import React from 'react'

const Empty = ({text}) => {
    return (
        <div className='flex justify-center items-center text-sm text-gray-400 h-[40vh]'>
            There is no {text}
        </div>
    )
}

export default Empty