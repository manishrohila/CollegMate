import React from 'react'
import Button from './Button'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavBarLinks } from '../../Data/navbar-links'

const Navbar = () => {

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className={`flex h-16 items-center justify-center border-b-[1px] border-b-richblack-700 ${
      location.pathname === "/" ? "bg-richblack-800" : ""
    } transition-all duration-200`}>
      {/* logo  */}

      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        <div className=' cursor-pointer'>
          <Link to={'/'}>
            <h1 className='text-5xl font-extrabold text-[#5E5BFB]'>ColleGMate</h1>
          </Link>
        </div>

        <nav className='hidden md:block'>
          <ul className='flex gap-x-6 font-bold	'>
            {
              NavBarLinks.map((link, index) => (
                <li key={index}>
                  {
                    link.title === "courses" ? (
                      <div> courses </div>
                    ) : (
                      <Link to={link?.path}>
                        <p
                          className={`${matchRoute(link?.path)
                            ? "text-amber-400"
                            : "text-richblack-500"
                            }`}
                        >
                          {link.title}
                        </p>
                      </Link>
                    )
                  }
                </li>
              ))
            }
          </ul>

        </nav>

        {/* login, signup button */}
        <div className='flex gap-x-6'>
          <div>
            <Button active={false} linkto={"/login"}>Login</Button>
          </div>
          <div className=''>
            <Button active={false} linkto={"/signup"}>Register</Button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar