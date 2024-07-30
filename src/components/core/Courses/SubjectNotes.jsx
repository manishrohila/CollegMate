import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fileUploadEndpoints } from '../../../services/apis';
import toast from 'react-hot-toast';
import { apiConnector } from '../../../services/apiConnector';
const { GET_FILES_BY_DEPARTMENT_AND_SUBJECT_API } = fileUploadEndpoints;

const SubjectNotes = () => {
  
  const { Department, subjectName } = useParams();
  const [files, setFiles] = useState([]);

  async function getFiles(Department, subjectName) {
    const toastId = toast.loading("Loading files...");
    const url = `${GET_FILES_BY_DEPARTMENT_AND_SUBJECT_API}?Department=${Department}&subjectName=${subjectName}`;
    console.log(url);
    try {
      const response = await apiConnector("GET", url);
      console.log("Printing file data", response);
      if (response.data && response.data.files) {
        setFiles(response.data.files);
      } else {
        setFiles([]);
      }
    } catch (error) {
      console.error("Get Files API error:", error);
    }
    toast.dismiss(toastId);
  }

  useEffect(() => {
    if (Department && subjectName) {
      getFiles(Department, subjectName);
    }
  }, [Department, subjectName]);

  return (
    <div className='min-h-[calc(100vh-3.2rem)]'>
      <div className='h-20 bg-[#86C3FB] text-4xl font-medium font-sans flex items-center justify-center'>
        {`${Department} - ${subjectName}`}
      </div>
      <div className='grid grid-cols-3 text-lg w-10/12 mx-auto mt-4 gap-x-8 items-center'>
        {files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className=' bg-gradient-to-r from-cyan-200 to-blue-300 ...  text-sm rounded font-medium p-4 m-2'>
              
              <p>Subject: {file.subject}</p>
              <p>Uploaded By: {file.firstName}</p>
              <p>Year: {file.year}</p>
              {file.filePath ? (
                <button
                  className='bg-blue-500 text-white rounded p-2 mt-2'
                  onClick={() => window.open(`http://localhost:4000/${file.filePath}`, '_blank')}
                >
                  Open File
                </button>
              ) : file.driveLink ? (
                <button
                  className='bg-blue-500 text-white rounded p-2 mt-2'
                  onClick={() => window.open(file.driveLink, '_blank')}
                >
                  Open Drive Link
                </button>
              ) : (
                <p>No file path or drive link available.</p>
              )}
            </div>
          ))
        ) : (
          <p>No files found for this subject.</p>
        )}
      </div>
    </div>
  );
}

export default SubjectNotes;
