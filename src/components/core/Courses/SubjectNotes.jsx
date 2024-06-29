import React from 'react'
import { useParams } from 'react-router-dom'

const SubjectNotes = () => {
    const { Department, subjectName} = useParams();
  return (
    <div>
      I am subject notes
    </div>
  )
}

export default SubjectNotes