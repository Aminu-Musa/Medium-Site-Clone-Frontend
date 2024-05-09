import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../utilities/Api";

const FormSignUp = () => {
  // STATE MANAGMENT
  const [fname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      fname === "" ||
      lastname === "" ||
      phone === "" ||
      email === "" ||
      password === ""
    ) {
      setValidation(false);

    } else {
      const newUserData = {
        fristname: fname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
      };
      console.log(newUserData);
      try {
        const req = await api.post("/users", newUserData);
        const res = await req.data;
        if(res){
          alert("Registration was Successful")
          setEmail("")
          setFname("")
          setLname("")
          setPhone("")
          setPassword("")
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="bg-white/90 h-full fixed z-50 top-0 bottom-0 right-0 left-0 overflow-y-auto w-full flex justify-center ">
      <div className="form-wrapper p-10 bg-white h-fit shadow-lg w-full md:w-1/2 mx-auto">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 ml-auto cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </NavLink>

        <h1 className="text-center text-2xl mt-20 font-serif md:text-3xl">
          Sign up with email.
        </h1>

        <div className="form-container  w-[70%] mx-auto flex flex-col">
          <p className=" text-center hidden mt-10 w-8/12 mx-auto md:block">
            Enter your email address to create an account.
          </p>

          <form
            action=""
            className="flex flex-col items-center gap-4 text-black"
          >
            <div className="form-inputs w-full">
              <div className="form-group-firstname">
                <label htmlFor="firstname" className="mt-6 text-sm">
                  Firstname
                </label>
                <input
                  type="text"
                  value={fname}
                  name=""
                  id="firstname"
                  className={
                    !validation
                      ? "w-full  border-b block  p-2 outline-none text-center border-red-600"
                      : "w-full  border-b block  p-2 outline-none text-center border-black"
                  }
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="form-group-lastname">
                <label htmlFor="lastname" className="mt-6 text-sm">
                  Lastname
                </label>
                <input
                  type="text"
                  name=""
                  value={lastname}
                  id="lastname"
                  className={
                    !validation
                      ? "w-full  border-b block  p-2 outline-none text-center border-red-600"
                      : "w-full  border-b block  p-2 outline-none text-center border-black"
                  }
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="form-group-phone">
                <label htmlFor="phone" className="mt-6 text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  value={phone}
                  name=""
                  id="phone"
                  className={
                    !validation
                      ? "w-full  border-b block  p-2 outline-none text-center border-red-600"
                      : "w-full  border-b block  p-2 outline-none text-center border-black"
                  }
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group-email">
                <label htmlFor="email" className="mt-6 text-sm">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  name=""
                  id="email"
                  className={
                    !validation
                      ? "w-full  border-b block  p-2 outline-none text-center border-red-600"
                      : "w-full  border-b block  p-2 outline-none text-center border-black"
                  }
                  onChange={(e) => setEmail(e.target.value) }
                />
              </div>

              <div className="form-group-phone">
                <label htmlFor="password" className="mt-6 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  name=""
                  id="password"
                  className={
                    !validation
                      ? "w-full  border-b block  p-2 outline-none text-center border-red-600"
                      : "w-full  border-b block  p-2 outline-none text-center border-black"
                  }
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              className="mt-5 bg-black text-white rounded-full w-7/12 p-2"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </form>

          <div className="text-sm text-green-700 mt-8">
            <NavLink to="/signup" className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <span>All sign up options</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
