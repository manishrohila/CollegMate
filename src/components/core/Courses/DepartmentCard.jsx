import React from 'react'
import { department } from '../../../Data/Department'
import Button from '../../common/Button'

const DepartmentCard = () => {
    return (
        <div className='w-10/12 mx-auto m-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4'>
                {
                    department.map((course, index) => (
                        <div key={index} className='border-2 border-black bg-white flex flex-col justify-center items-center w-full h-64'>
                            {/* Upper Part */}
                            <div className='w-full h-40 bg-[#329BFA] flex justify-center items-center'>
                                <p className='text-black font-medium text-xl text-center'>{course.name}</p>
                            </div>
                            {/* Lower Part */}
                            <div className='w-full h-24 bg-[#EDF4FB] flex justify-center items-center'>
                                <Button active={false} linkto={`/courses/${course.name} `}>
                                    Access Course
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DepartmentCard
