import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white/90 h-full fixed z-50 top-0 bottom-0 right-0 left-0 overflow-y-auto w-full flex justify-center ">
      <div className="form-wrapper p-10 bg-white h-fit  shadow-lg w-full md:w-1/2 mx-auto">
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
          Join Medium.
        </h1>

        <div className="flex flex-col items-center gap-5 mt-20 ">
          <div className="signIn-option w-4/5 space-y-3 md:w-1/2">
            <div className="google_sign_in border-black border px-5 py-2 rounded-full flex justify-between cursor-pointer">
              <div className="icon w-fit">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="ah"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                      fill="#EA4335"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="text-center w-full">Sign up with Google</p>
            </div>

            <div className="facebook_sign_in border-black border px-5 py-2 rounded-full flex justify-between cursor-pointer">
              <div className="icon w-fit">
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="ah"
                >
                  <path
                    d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z"
                    fill="#1877F2"
                  ></path>
                  <path
                    d="M15.9 14.9l.44-2.9h-2.78v-1.87c0-.8.39-1.57 1.63-1.57h1.26V6.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V12H7.9v2.9h2.54v6.98a10.07 10.07 0 0 0 3.12 0V14.9h2.33z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <p className="text-center w-full">Sign up with Facebook</p>
            </div>

            <div className="email_sign_in border-black border px-5 py-2 rounded-full flex justify-between cursor-pointer" onClick={()=> navigate("/form-signup")}>
              <div className="icon w-fit">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="ah"
                >
                  <g stroke="#242424">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="1"></rect>
                    <path d="M3.5 8l8.5 6 8.5-6" stroke-linecap="round"></path>
                  </g>
                </svg>
              </div>
              <p className="text-center w-full">Sign up with email</p>
            </div>
          </div>

          <p className="create-account mt-10 mb-12">
            Already have an account?
            <span
              className="font-bold text-green-700 ml-2 cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </span>
          </p>
          <div className="privacy__policy text-xs text-center flex flex-col gap-10">
            <p className=" text-gray-600">
              Forgot email or trouble signing in?
              <span className="underline cursor-pointer">Get help</span>.
            </p>

            <p className=" text-gray-600">
              Click “Sign in” to agree to Medium’s
              <span className="underline cursor-pointer">Terms of Service</span>
              and acknowledge that Medium’s <br />
              <span className="underline cursor-pointer">Privacy Policy</span>
              applies to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
