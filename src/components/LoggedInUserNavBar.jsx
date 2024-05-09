import logo from "../assets/img/SVGs/logo.svg";
import userIcon from "../assets/img/PNGs/userIcon.png";
import { NavLink } from "react-router-dom";

export const LoggedInUserNavBar = () => {
  return (
    <>
      <div className="wrapper border-b border-gray-200">
        <nav className="py-2 px-6 md:container mx-auto justify-between items-center md:flex flex-row">
          <div className="left-col flex gap-4 items-center">
            <div className="logo">
              <NavLink to="/"><img src={logo} alt="" srcset="" className="w-40" /></NavLink>
            </div>
            <div className="search-bar flex gap-2 bg-slate-100 p-2 rounded-full w-full">
              <label htmlFor="searchbar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </label>
              <input
                type="search"
                name=""
                id="searchbar"
                placeholder="search"
                className="bg-transparent outline-none border-none text-gray-900"
              />
            </div>
          </div>

          <div className="mt-2 border-t right-col flex gap-4 text-sm items-center justify-center pt-2 text-gray-500 md:border-none md:pt-0">
            <div className="write flex items-center gap-1 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
              <span>Write</span>
            </div>
            <div className="btn bg-green-600 text-white rounded-full px-3 py-2">
              <NavLink to="/signup">sign up</NavLink>
            </div>
            <div className="btn">
              <NavLink to="/signin">sign in</NavLink>
            </div>
            <div className="img border rounded-full cursor-pointer ">
              <img src={userIcon} alt="" srcset="" className="rounded-full" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
