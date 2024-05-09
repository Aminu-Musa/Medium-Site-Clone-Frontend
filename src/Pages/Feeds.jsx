import React from "react";
import { FeedNavBar } from "../components/FeedNavBar";
import { NavLink } from "react-router-dom";
import userIcon from "../assets/img/PNGs/userIcon.png";
import postImg from "../assets/img/JPEGs/img4.jpg";

const Feeds = () => {
  return (
    <div>
      <FeedNavBar />

      <div>
        <div className="wrapper px-6  md:container m-auto md:flex">
          <main className="md:p-10 md:basis-3/4 md:border-r">
            <div className="mainNav flex justify-between items-center py-5 mb-10 space-x-4 border-b md:pb-4 text-gray-700">
              <div className="add-category ">
                <svg width="19" height="19" class="hi hj hk">
                  <path
                    d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <ul className="nav flex justify-between  w-full items-center text-xs  md:text-sm">
                <li>
                  {" "}
                  <NavLink>For you</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink>Following</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink>Writing</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink>Psychology</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink>Business</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink>Money</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink>Blockchain</NavLink>
                </li>
              </ul>

              <div className="scroll">
                <svg
                  className="arrow-left-19px_svg__svgIcon-use rotate-180"
                  width="26px"
                  height="26px"
                  viewBox="0 0 19 19"
                  aria-hidden="true"
                  //   style="transform: rotate(180deg);"
                >
                  <path
                    d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            {/* ALL FEEDS  MAP THIS OUT*/}

            <div className="all-feeds space-y-10 ">

              <div className="single-feed-container border-b">
                <div className="singlefeed flex items-center ">
                  <div className="feed-body">
                    <div className="user-date-cetegory-info flex items-center text-sm space-x-2">
                      <div className="userDP">
                        {" "}
                        <img
                          src={userIcon}
                          alt=""
                          srcset=""
                          className="rounded-full w-5"
                        />
                      </div>
                      <p className="user-name text-black">Obeawords .</p>
                      <p className="post-date text-gray-600">Feb 21, 2024</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 64 64"
                        fill="none"
                        class="kz la"
                      >
                        <path
                          d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z"
                          fill="#FFC017"
                        ></path>
                      </svg>
                      <p className="user-category text-gray-600">Member-only</p>
                    </div>
                    <p className="story-title font-bold text-base md:text-2xl">
                      How To Make Money With Google Maps ($100-$200) PER DAY
                    </p>
                    <p className="story-desc hidden md:block">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Numquam cumque quae, magnam dolorum totam deserunt
                      exercitationem amet inventore, nisi accusamus dignissimos
                      ratione iusto,{" "}
                    </p>
                  </div>
                  <div className="feed-img bg-slate-800 md:w-3/5 ">
                    <img src={postImg} alt="" srcset="" className="" />
                  </div>
                </div>

                <div className="categories flex justify-between items-center py-8">
                  <div className="story-category flex text-sm gap-5">
                    <p className="category bg-gray-100 px-4 py-1 rounded-full cursor-pointer">
                      Google
                    </p>
                    <p className="read-time text-gray-600">3 min read</p>
                  </div>

                  <div className="action-btn flex gap-5">
                    <div className="cursor-pointer text-gray-200">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="kn"
                      >
                        <path
                          d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                          fill="#000"
                        ></path>
                      </svg>
                    </div>
                    <div className="cursor-pointer text-gray-500">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="nu nv"
                      >
                        <path
                          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>

                    <div className="cursor-pointer text-gray-500">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP ENDS HERE */}
          </main>

          {/* ASIDE */}
          <aside className="p-10  md:basis-2/4">
            <h1>Col 2</h1>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
