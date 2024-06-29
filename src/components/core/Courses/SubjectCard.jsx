import React from 'react'
import Button from '../../common/Button';

const SubjectCard = (props) => {
    const subject = props.subject;
    const Department = props.Department;
    return (
        <div className='mt-4 w-10/12 mx-auto'>
            <Button linkto={`/courses/${Department}/subjectNotes/${subject}`} active={false}> {subject}</Button>
           
               
        </div>

    )
}

export default SubjectCard