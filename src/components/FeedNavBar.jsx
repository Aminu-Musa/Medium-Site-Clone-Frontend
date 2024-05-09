import logo from "../assets/img/SVGs/logo.svg";
import userIcon from "../assets/img/PNGs/userIcon.png";
import { NavLink } from "react-router-dom";

export const FeedNavBar = () => {
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-500">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z" fill="currentColor"></path></svg>
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

          <div className="mt-2 border-t right-col flex space-x-8 text-sm items-center justify-center pt-2 text-gray-500 md:border-none md:pt-0">
            <div className="write flex items-center gap-1 cursor-pointer hover:text-black transition duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
              <span>Write</span>
            </div>
            <div className="notification cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications" className="hover:text-black transition duration-300">
              <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" stroke-linecap="round"></path>
              <path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" stroke-linejoin="round"></path>
              </svg>
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
