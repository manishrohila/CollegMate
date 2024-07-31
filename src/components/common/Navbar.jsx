import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavBarLinks } from '../../Data/navbar-links';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const menuRef = useRef(null); // Reference to the menu container

  const closeMenu = () => setShowMenu(false);

  // Menu items to show based on login status
  const menu = [
    { title: "Home", path: "/" },
    { title: "Courses", path: "/courses" },
    { title: "Upload", path: "/upload" },
    { title: "Contact Us", path: "/contact" },
    ...(!token ? [
      { title: "Login", path: "/login" },
      { title: "Sign Up", path: "/signup" },
    ] : []),
  ];

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener when the menu is open
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener on component unmount or when menu state changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className={`flex h-16 items-center bg-white justify-center border-b-[1px] border-b-richblack-700 ${location.pathname === "/" ? "bg-richblack-800" : ""} transition-all duration-200`}>
      {/* Logo */}
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        <div className='cursor-pointer'>
          <Link to='/'>
            <h1 className='text-5xl font-extrabold text-blue-500'>CollegMate</h1>
          </Link>
        </div>

        <nav className='hidden md:block'>
          <ul className='flex gap-x-6 font-bold'>
            {NavBarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "courses" ? (
                  <div> courses </div>
                ) : (
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path) ? "text-blue-700" : "text-[#2d2f31]"}`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login, Signup, Dashboard Button */}
        <div className='hidden md:flex gap-x-6'>
          {token === null && (
            <div>
              <Button active={false} linkto="/login" className='bg-blue-600 hover:bg-blue-700'>Login</Button>
            </div>
          )}
          {token == null && (
            <div>
              <Button active={false} linkto="/signup" className='bg-blue-600 hover:bg-blue-700'>Register</Button>
            </div>
          )}
          {token !== null && <ProfileDropDown />}
        </div>

        {/* For Mobiles */}
        <div className='md:hidden relative'>
          <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
          <div
            ref={menuRef} // Attach the ref here
            className={`fixed top-0 right-0 h-full bg-white border border-gray-300 rounded shadow-lg z-50 transition-transform duration-300 ${showMenu ? 'transform translate-x-0' : 'transform translate-x-full'}`}
          >
            {showMenu && (
              <div className='flex flex-col'>
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className='block w-[120px] text-center px-4 py-2 text-black hover:bg-gray-200 border-b border-gray-300'
                    onClick={closeMenu} // Close menu on link click
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
