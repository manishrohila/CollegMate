import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-around p-5 bg-custom-color-1'>
      {/* logo  */}
      <div className='mr-48 cursor-pointer'>
        <Link to={'/'}>
          <h1 className='text-5xl font-extrabold text-[#5E5BFB]'>ColleGMate</h1>
        </Link>
    </div>

      {/* login, signup button */}
      <div className='flex ml-20'>
        <div>
          <Button active={false} linkto={"/login"}>Login</Button>
        </div>
        <div className='ml-20'>
          <Button active={false} linkto={"/signup"}>Register</Button>
        </div>

      </div>
    </div>
  )
}

export default Navbar