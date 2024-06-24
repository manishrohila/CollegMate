import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { department } from "../Data/Department"
const Upload = () => {

  const [formData, setFormData] = useState({

    department: "",
    year: "",
    subject: "",
  })


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const { user } = useSelector((state) => state.profile);
  return (
    <div className='min-h-[calc(100vh-3.2rem)] flex w-7/12 mx-auto pt-36'>
      <form className="flex w-full flex-col gap-y-4 mt-4 ">
        <div className="grid grid-cols-2 gap-x-4 ">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
              First Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={user?.firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
              Last Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={user?.lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full"
            />
          </label>
        </div>
        <div className='grid grid-cols-2 gap-x-4'>
          <label className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
            <p>Department <sup className="text-pink-900">*</sup></p>
            <select className='form-style w-full'>
              {department.map((course, index) => (
                <option key={index}>{course.name}</option>
              ))}
            </select>
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
              Subject Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="subjectName"
              value=""
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full"
            />
          </label>
        </div>
        <div className=''>
          <label className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
            <p>Year <sup className="text-pink-900">*</sup></p>
            <select className='form-style w-full'>
              <option > 1st year</option>
              <option > 2nd year</option>
              <option > 3rd year</option>
              <option > 4th year</option>
            </select>
          </label>
        </div>
        <button
        type="submit"
        className="mt-6 rounded-[8px] bg-green-500 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Upload
      </button>
      </form>
    </div>
  )
}

export default Upload