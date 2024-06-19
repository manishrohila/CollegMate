import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around p-5 bg-custom-color-1'>
      {/* logo  */}
      <div className='mr-48 cursor-pointer'>
        <h1 className='text-5xl font-extrabold text-[#5E5BFB]'>ColleGMate</h1>

      </div>

      {/* login, signup button */}
      <div className='flex ml-20'>
        <div className='ml-20 cursor-pointer font-medium text-2xl border-2 border-[#423FE5] rounded-md text-white p-2 px-4 bg-[#423FE5]'>
          <button className=''>Login</button>
        </div>
        <div className='ml-20 cursor-pointer font-medium text-2xl border-2 border-[#423FE5] rounded-md text-white p-2 px-4 bg-[#423FE5]'>
          <button>Register</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar