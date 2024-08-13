import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux';
import {fileUploadEndpoints} from '../../../services/apis';
import {apiConnector} from '../../../services/apiConnector';
import {deleteFile} from '../../../services/operations/profileAPI.js';
const {GET_USER_NOTES} = fileUploadEndpoints


const MyProfile = () => {
    const [files, setFiles] = useState([]);
    const { user } = useSelector((state) => state.profile);
    
    
    useEffect(()=>{
        // Fetch user files
        const fetchUserFiles = async () => {
            try {
                const response = await apiConnector("GET", GET_USER_NOTES, {
                    params: { userId: user._id },
                });
                setFiles(response.data.notes);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUserFiles();
      },[user]);

const handleDelete = (fileId)=>{
  deleteFile(fileId);
  setFiles((prevFiles) => prevFiles.filter((file) => file._id !== fileId));
}
    return (
        <div className="min-h-screen text-balck p-6">
            <div className="container mx-auto flex">
                {/* Left Section - User Info */}
                <div className="w-1/4">
                    <img src={user?.image} alt={user?.firstName} className="rounded-full w-32 h-32 object-cover mb-4" />
                    <h1 className="text-2xl font-semibold">{`${user?.firstName} ${user?.lastName}`}</h1>
                    <p className="text-gray-400">{user?.username}</p>
                    <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded">Edit Profile</button>
                </div>

                {/* Right Section - User's Files */}
                <div className="w-3/4 pl-10">
                    <h2 className="text-xl font-semibold mb-4">Your Uploaded Files</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {files.map((file) => (
                            <div key={file._id} className="bg-gradient-to-r from-cyan-200 to-blue-300 ...  text-sm rounded font-medium p-4 m-2">
                            
                                <h3 className="text-lg font-medium">{file.subject}</h3>
                                <p className="text-sm text-gray-400 mb-4">{file.createdAt}</p>
                                <button 
                                    onClick={() => handleDelete(file._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded"
                                >
                                    Delete File
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
