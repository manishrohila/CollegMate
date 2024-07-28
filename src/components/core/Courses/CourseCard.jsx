import React from 'react'
import { courses } from '../../../Data/Courses'
import Button from '../../common/Button'

const CourseCard = (props) => {
    return (
        <div className='w-10/12 mx-auto m-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4'>
                {
                    courses.map((course, index) => (
                        <div key={index} className='border-2 border-black bg-white flex flex-col justify-center items-center w-full h-64'>
                            {/* Upper Part */}
                            <div className='w-full h-32 bg-[#329BFA] flex justify-center items-center'>
                                <p className='text-white font-medium text-xl text-center'>{course.code}</p>
                            </div>
                            {/* Lower Part */}
                            <div className='w-full h-32 bg-[#EDF4FB] flex flex-col justify-center items-center'>
                                <p className='font-medium text-lg text-center mb-2'>{course.name}</p>
                                <Button active={false} linkto={`/courses/${props.Department}/subjectNotes/${course.name}`}>
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

export default CourseCard
