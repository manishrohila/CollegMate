import React from 'react'
import Button from '../../common/Button';

const CourseCard = (props) => {
    const subject = props.subject;
    const Department = props.Department;
    return (
        <div className='border-2 border-black bg-white flex flex-col justify-center items-center w-full h-64'>
            {/* Upper Part */}
            <div className='w-full h-32 bg-[#329BFA] flex justify-center items-center'>
                <p className='text-white font-medium text-xl text-center'>{subject}</p>
            </div>
            {/* Lower Part */}
            <div className='w-full h-32 bg-[#EDF4FB] flex flex-col justify-center items-center'>
                <p className='font-medium text-lg text-center mb-2'>{subject}</p>
                <Button active={false} linkto={`/courses/${Department}/subjectNotes/${subject}`}>
                    Access Course
                </Button>
            </div>
        </div>
    )
}

export default CourseCard