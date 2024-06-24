import React from 'react'
import { department } from '../../../Data/Department'
import Button from '../../common/Button'
const CourseCard = () => {
    return (
        <div className='w-10/12  mx-auto m-6'>
            <div className='grid grid-cols-3 gap-x-4 gap-y-4 '>
                {
                    department.map((course, index) => (
                        <div key={index} className='border-2 border-black  bg-[#D9D9D9] flex flex-col justify-center items-center gap-2'>
                            <img src={"https://res.cloudinary.com/dg4jqvgqr/image/upload/v1719210843/collegeMate/htxdn68bmwcyuaz6lu5x.jpg"} alt="course" className='object-cover ' />
                            <p className='font-medium text-xl '>{course.name}</p>
                            <Button active={false} linkto={`/courses/${course.name}`}>
                                Access Course
                            </Button>
                        </div>


                    ))
                }
            </div>
        </div>
    )
}

export default CourseCard