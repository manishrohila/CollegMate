import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
    const { department } = useParams();
    return (
        <div className='min-h-[calc(100vh-3.2rem)]'>
            <div className='h-20 bg-[#86C3FB] text-4xl font-medium font-sans flex items-center justify-center'>
                {department}
            </div>
            <div className='grid grid-cols-3 text-lg w-10/12 mx-auto mt-4 gap-x-8 items-center'>

                <button className='bg-green-300 rounded font-medium'>2nd Year</button>
                <button className='bg-green-300 rounded font-medium'>3rd Year</button>
                <button className='bg-green-300 rounded font-medium'>4th Year</button>
            </div>
        </div>
    )
}

export default Course