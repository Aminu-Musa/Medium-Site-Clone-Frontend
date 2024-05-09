import logo from "../../assets/img/SVGs/logo.svg";
import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-layout flex">
      <div className="sideBar bg-dashboard-primary w-[250px]">
        <div className="sidebar-container  z-10 min-h-screen  border-r border-black">
          <div className="logo bg-yellow-400 py-4 flex justify-center items-center cursor-pointer border-b border-black">
            <img src={logo} alt="" srcset="" className=" w-3/5" />
          </div>

          <nav className="mt-5">
            <ul className="text-gray-400 flex flex-col dashboard-navbar">
              <li>
              
                <NavLink to="dashboard" className="block py-2">
               
                  Dashboard
                </NavLink>
              </li>
              <li>
              
                <NavLink to="createuser" className="block py-2">
               
                  Create User
                </NavLink>
              </li>
              <li>
             
                <NavLink to="createstory" className="block py-2">
                
                  Create Story
                </NavLink>
              </li>
              <li>
          
                <NavLink to="users" className="block py-2">
               
                  Users
                </NavLink>
              </li>
              <li>
         
                <NavLink to="stories" className="block py-2">
                  {" "}
                  Stories
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="Main  bg-dashboard-secondary min-h-screen w-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
