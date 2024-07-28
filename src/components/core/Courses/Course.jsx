import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast';
import { apiConnector } from '../../../services/apiConnector';
import { fileUploadEndpoints } from '../../../services/apis';
import SubjectCard from './SubjectCard';
import CourseCard from './CourseCard';

const { GET_SUBJECT_NAME_API } = fileUploadEndpoints;
const Course = () => {

    const { Department } = useParams();
    const [subjects, setSubjects] = useState([]);

    async function getSubjectName(Department) {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector(
                "GET",
                `${GET_SUBJECT_NAME_API}?Department=${encodeURIComponent(Department)}`
            );
            setSubjects(response.data.subjects);
        } catch (error) {
            console.log("Get Subject Name API error ...", error.message);
        }
        toast.dismiss(toastId);
    }

    useEffect(() => {
        if (Department) {
            getSubjectName(Department);
        }
    }, [Department]);

    return (
        <div className='min-h-[calc(100vh-3.2rem)]'>
            <div className='h-20 bg-[#86C3FB] text-4xl font-medium font-sans flex items-center justify-center'>
                {Department}
            </div>

            <div >
                <CourseCard Department={Department}/>
            </div>

            <div>

                {subjects.map((subject, index) => (
                    <SubjectCard key={index} Department={Department} subject={subject} />
                ))}

            </div>
        </div>
    )
}

export default Course