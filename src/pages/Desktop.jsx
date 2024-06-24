import React from 'react'
import { useSelector } from 'react-redux'

const Desktop = () => {
  const { user } = useSelector((state) => state.profile)
    
  return (
    <div className='min-h-[calc(100vh-200px)] flex justify-center flex-col'>
      <div className='text-4xl flex justify-center items-center pt-10 italic bold font-serif'>
        <p>WELCOME, {user?.firstName.toUpperCase()} !</p>
      </div>

      <div className='w-5/12 mx-auto text-center italic font-medium mt-20'>
        <p>We’re thrilled to have you here! Explore a treasure trove of study notes from your peers and professors. Don’t forget, your contributions can make a big difference – upload your notes today and help your fellow students succeed!</p>
      </div>
    </div>
  )
}

export default Desktop