import React from "react";
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import Home from "./src/Pages/Home";
import CreateStory from "./src/Pages/CreateStory";
import SignIn from "./src/Pages/SignIn";
import SignUp from "./src/Pages/SignUp";
import SingleStory from "./src/Pages/SingleStory";
import Navigation from "./src/components/Navigation";
import FormSignUp from "./src/components/FormSignUp";
import FormSignIn from "./src/components/FormSignIn";
import NavDisplay from "./src/components/NavDisplay";
import Partner_program from "./src/Pages/Partner_program";
import Feeds from "./src/Pages/Feeds";
import AdminDashboard from "./src/Pages/Admin/AdminDashboard";
import Dashboard from "./src/Pages/Admin/Dashboard"
import Createstory from "./src/Pages/Admin/CreateStory";
import Createuser from "./src/Pages/Admin/CreateUser";
import Allusers from "./src/Pages/Admin/AllUsers";
import Allstory from "./src/Pages/Admin/AllStory";




const Router = () => {
  return (
    <BrowserRouter>
      <NavDisplay>
        <Navigation />
      </NavDisplay>
      
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/createstory" element={<CreateStory />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/form-signup" element={<FormSignUp />} />
          <Route path="/form-signin" element={<FormSignIn />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route  path="feed"  element={<Navigate to="/feeds" />} />
          <Route path="/partner-program" element={<Partner_program />} />
          <Route path="/singlestory" element={<SingleStory />} />
          {/* <Route path="/:singlestory" element={<SingleStory />} /> */}
          <Route path="*" element={<h1>Sorry Page not Found</h1>} />

          <Route path="admin" element={<AdminDashboard/>}>

          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="createstory" element={<Createstory/>} />
          <Route path="createuser" element={<Createuser/>} />
          <Route path="users" element={<Allusers/>} />
          <Route path="stories" element={<Allstory/>} />
          
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
