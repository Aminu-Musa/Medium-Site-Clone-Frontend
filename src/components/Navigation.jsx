import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import logo from "../assets/img/SVGs/logo.svg"

const Navigation = () => {
  return (
    <div>
        <header className="bg-header-bg border-b border-black py-4 fixed w-full top-0 right-0 left-0 z-10">
          <div className="wrapper flex justify-between px-4  items-center lg:container mx-auto">
            <div className="logo w-64"> 
            <NavLink to="/"><img src={logo} alt="" className='w-2/3'/></NavLink> 
            </div>
            <nav className='flex space-x-6 '>
                <ul className='hidden md:flex  items-center space-x-9'>
                        <li> <NavLink to="/partner-program" className="">Write</NavLink></li>
                        <li> <NavLink to="/signin" className=" ">Sign in</NavLink></li>
                </ul>
                <div className="btn py-2 px-6 text-white bg-black rounded-full cursor-pointer"> <NavLink to="/signup">Get Started</NavLink></div>
            </nav>

          </div>
        </header>
      <Outlet/>
    </div>
  )
}

export default Navigation
