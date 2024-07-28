import React from 'react'
import Button from './Button'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavBarLinks } from '../../Data/navbar-links'
import { useSelector } from 'react-redux'
import ProfileDropDown from '../core/Auth/ProfileDropDown'

const Navbar = () => {

  const location = useLocation();
  const {token} = useSelector((state)=>state.auth);
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className={`flex h-16 items-center bg-white justify-center border-b-[1px] border-b-richblack-700 ${
      location.pathname === "/" ? "bg-richblack-800" : ""
    } transition-all duration-200`}>
      {/* logo  */}

      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        <div className=' cursor-pointer'>
          <Link to={'/'}>
            <h1 className='text-5xl font-extrabold text-blue-500'>StudySync</h1>
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
                            ? "text-blue-700"
                            : "text-[#2d2f31]"
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

        {/* login, signup, dashboard button */}

          
        <div className='flex gap-x-6'>
          {
            token === null && (
              <div>
              <Button active={false} linkto={"/login"} className={'bg-blue-600 hover:bg-blue-700'}>Login</Button>
              </div>
              
            )
          }
          {
            token==null && (
              <div className=''>
              <Button active={false} linkto={"/signup"} className={'bg-blue-600 hover:bg-blue-700'}>Register</Button>
            </div>
            )
          }
          {
            token!==null && <ProfileDropDown/>
          }
        

        </div>
      </div>

    </div>
  )
}

export default Navbar