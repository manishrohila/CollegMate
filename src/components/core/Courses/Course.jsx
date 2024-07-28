import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubjectCard from './SubjectCard';
import { department } from '../../../Data/Department';

const Course = () => {
    const { Department } = useParams();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const dept = department.find(d => d.name === Department);
        if (dept) {
            setSubjects(dept.subjects);
        }
    }, [Department]);

    return (
        <div className='min-h-[calc(100vh-3.2rem)]'>
            <div className='h-20 bg-[#86C3FB] text-4xl font-medium font-sans flex items-center justify-center'>
                {Department}
            </div>
            <div>
                {subjects.map((subject, index) => (
                    <SubjectCard key={index} Department={Department} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default Course;
