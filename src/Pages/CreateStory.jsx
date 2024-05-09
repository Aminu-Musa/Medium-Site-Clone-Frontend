import React from "react";
import userDP from "../assets/img/PNGs/userCommentIcon.png";

const CreateStory = () => {
  return (
    <div>
      <div className="nav flex justify-between py-4 px-6 md:w-[80%] mx-auto">
        <div className="logo-draft flex gap-2 items-center">
          <svg class="svgIcon-use" height="25" viewBox="0 0 1043.63 592.71">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36"></path>
                <path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"></path>
                <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
              </g>
            </g>
          </svg>
          <span className="text-sm text-gray-700">Draft in Aminu Musa</span>
        </div>

        <div className="post-notification-profile flex item-center gap-4">
          <div className="btn text-sm bg-green-600 rounded-full px-3 py-1 h-fit font-semibold text-white cursor-pointer">
         
            Publish
          </div>
          <div className="elipces cursor-pointer">
            <svg
              className=" opacity-50 hover:opacity-100 transition duration-300"
              width="25"
              height="25"
            >
              <path
                d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="notification cursor-pointer">
            <svg
              className=" opacity-50 hover:opacity-100 transition duration-300"
              width="25"
              height="25"
              viewBox="-293 409 25 25"
            >
              <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
            </svg>
          </div>
          <div className="profile cursor-pointer">
            <img src={userDP} alt="" srcset="" className="rounded-full" />
          </div>
        </div>
      </div>

      <div className="post-body bg-green mt-9 py-6 px-6 md:w-[60%] mx-auto">
        <form action="">
          <div className="post-title flex items-center gap-4">
            
            <div className="border flex items-center justify-center w-fit border-black rounded-full h-fit cursor-pointer   relative">
              <svg width="25" height="25">
                <path
                  d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="action-icons absolute left-[4rem] flex gap-4 md:left-[21rem]">
              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 17a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
                  fill="#1A8917"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 10h12a2 2 0 012 2v8a2 2 0 01-2 2H10a2 2 0 01-2-2v-8a2 2 0 012-2zm0 1a1 1 0 00-1 1v4.293l2.646-2.647a.5.5 0 01.708 0L19.707 21H22a1 1 0 001-1v-8a1 1 0 00-1-1H10zm8.293 10L12 14.707l-3 3V20a1 1 0 001 1h8.293z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  d="M18.224 15.313H22V22H10v-6.687h3.776v3.337h4.434v-3.336h.014zm0-5.313h-4.448v3.35h4.434V10h.014z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <rect
                  x="8.5"
                  y="10.761"
                  width="15"
                  height="11.522"
                  rx="1.5"
                  stroke="#1A8917"
                ></rect>
                <path
                  d="M19.5 16.522l-5.25 3.614v-7.229l5.25 3.615z"
                  stroke="#1A8917"
                  stroke-linejoin="round"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  d="M12.354 10.354a.5.5 0 00-.708-.708l.708.708zM6 16l-.354-.354a.5.5 0 000 .708L6 16zm5.646 6.354a.5.5 0 00.708-.708l-.708.708zm0-12.708l-6 6 .708.708 6-6-.708-.708zm-6 6.708l6 6 .708-.708-6-6-.708.708z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M19.646 21.646a.5.5 0 00.708.708l-.708-.708zM26 16l.354.354a.5.5 0 000-.708L26 16zm-5.646-6.354a.5.5 0 00-.708.708l.708-.708zm0 12.708l6-6-.708-.708-6 6 .708.708zm6-6.708l-6-6-.708.708 6 6 .708-.708z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg
                className=" cursor-pointer"
                width="33"
                height="33"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.05 9.441c.771-.724 1.773-.941 2.7-.941 0 0 .5 0 .5.5s-.5.5-.5.5c-.787 0-1.5.186-2.014.67-.51.479-.914 1.332-.914 2.858 0 1.285-.32 2.232-.907 2.859-.131.14-.272.26-.42.363.148.103.289.223.42.363.587.627.907 1.574.907 2.86 0 1.525.404 2.378.914 2.857.515.484 1.227.67 2.014.67 0 0 .5 0 .5.5s-.5.5-.5.5c-.927 0-1.929-.217-2.7-.941-.776-.73-1.228-1.89-1.228-3.587 0-1.131-.281-1.796-.637-2.175-.352-.376-1.435-.547-1.435-.547s-.5 0-.5-.5.5-.5.5-.5 1.083-.17 1.435-.547c.356-.38.637-1.044.637-2.175 0-1.697.452-2.857 1.229-3.587zm9.9 0c-.771-.724-1.773-.941-2.7-.941 0 0-.5 0-.5.5s.5.5.5.5c.787 0 1.5.186 2.015.67.51.479.913 1.332.913 2.858 0 1.285.32 2.232.907 2.859.131.14.272.26.42.363a2.633 2.633 0 00-.42.363c-.587.627-.907 1.574-.907 2.86 0 1.525-.404 2.378-.913 2.857-.516.484-1.228.67-2.015.67 0 0-.5 0-.5.5s.5.5.5.5c.927 0 1.929-.217 2.7-.941.776-.73 1.229-1.89 1.229-3.587 0-1.131.28-1.796.636-2.175.352-.376 1.435-.547 1.435-.547s.5 0 .5-.5-.5-.5-.5-.5-1.083-.17-1.435-.547c-.356-.38-.637-1.044-.637-2.175 0-1.697-.452-2.857-1.229-3.587z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 10.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M17 16.5a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M12 16.5a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M22 16.5a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="#1A8917"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 22.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="Title"
              className="font-serif border-l border-transparent outline-none text-4xl 
               p-2 w-full focus:border-l-2  focus:border-gray-300 md:text-6xl "
            />
          </div>



          <div className="post-body flex items-center gap-4">

          <div className="border flex items-center justify-center w-fit border-black rounded-full h-fit cursor-pointer  relative">
              <svg width="25" height="25">
                <path
                  d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="action-icons absolute left-[4rem] flex gap-4 md:left-[21rem]">
              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 17a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 100-2 1 1 0 000 2z"
                  fill="#1A8917"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 10h12a2 2 0 012 2v8a2 2 0 01-2 2H10a2 2 0 01-2-2v-8a2 2 0 012-2zm0 1a1 1 0 00-1 1v4.293l2.646-2.647a.5.5 0 01.708 0L19.707 21H22a1 1 0 001-1v-8a1 1 0 00-1-1H10zm8.293 10L12 14.707l-3 3V20a1 1 0 001 1h8.293z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  d="M18.224 15.313H22V22H10v-6.687h3.776v3.337h4.434v-3.336h.014zm0-5.313h-4.448v3.35h4.434V10h.014z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <rect
                  x="8.5"
                  y="10.761"
                  width="15"
                  height="11.522"
                  rx="1.5"
                  stroke="#1A8917"
                ></rect>
                <path
                  d="M19.5 16.522l-5.25 3.614v-7.229l5.25 3.615z"
                  stroke="#1A8917"
                  stroke-linejoin="round"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  d="M12.354 10.354a.5.5 0 00-.708-.708l.708.708zM6 16l-.354-.354a.5.5 0 000 .708L6 16zm5.646 6.354a.5.5 0 00.708-.708l-.708.708zm0-12.708l-6 6 .708.708 6-6-.708-.708zm-6 6.708l6 6 .708-.708-6-6-.708.708z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M19.646 21.646a.5.5 0 00.708.708l-.708-.708zM26 16l.354.354a.5.5 0 000-.708L26 16zm-5.646-6.354a.5.5 0 00-.708.708l.708-.708zm0 12.708l6-6-.708-.708-6 6 .708.708zm6-6.708l-6-6-.708.708 6 6 .708-.708z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg
                className=" cursor-pointer"
                width="33"
                height="33"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.05 9.441c.771-.724 1.773-.941 2.7-.941 0 0 .5 0 .5.5s-.5.5-.5.5c-.787 0-1.5.186-2.014.67-.51.479-.914 1.332-.914 2.858 0 1.285-.32 2.232-.907 2.859-.131.14-.272.26-.42.363.148.103.289.223.42.363.587.627.907 1.574.907 2.86 0 1.525.404 2.378.914 2.857.515.484 1.227.67 2.014.67 0 0 .5 0 .5.5s-.5.5-.5.5c-.927 0-1.929-.217-2.7-.941-.776-.73-1.228-1.89-1.228-3.587 0-1.131-.281-1.796-.637-2.175-.352-.376-1.435-.547-1.435-.547s-.5 0-.5-.5.5-.5.5-.5 1.083-.17 1.435-.547c.356-.38.637-1.044.637-2.175 0-1.697.452-2.857 1.229-3.587zm9.9 0c-.771-.724-1.773-.941-2.7-.941 0 0-.5 0-.5.5s.5.5.5.5c.787 0 1.5.186 2.015.67.51.479.913 1.332.913 2.858 0 1.285.32 2.232.907 2.859.131.14.272.26.42.363a2.633 2.633 0 00-.42.363c-.587.627-.907 1.574-.907 2.86 0 1.525-.404 2.378-.913 2.857-.516.484-1.228.67-2.015.67 0 0-.5 0-.5.5s.5.5.5.5c.927 0 1.929-.217 2.7-.941.776-.73 1.229-1.89 1.229-3.587 0-1.131.28-1.796.636-2.175.352-.376 1.435-.547 1.435-.547s.5 0 .5-.5-.5-.5-.5-.5-1.083-.17-1.435-.547c-.356-.38-.637-1.044-.637-2.175 0-1.697-.452-2.857-1.229-3.587z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>

              <svg className=" cursor-pointer" width="32" height="32" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 10.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M17 16.5a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M12 16.5a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="#1A8917"
                ></path>
                <path
                  d="M22 16.5a1 1 0 11-2 0 1 1 0 012 0z"
                  fill="#1A8917"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 22.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
                  fill="#1A8917"
                ></path>
                <rect
                  x=".5"
                  y=".5"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#1A8917"
                ></rect>
              </svg>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="Tell your story…"
              className="font-serif border-l border-transparent outline-none text-xl 
               p-2 w-full focus:border-l-2  focus:border-gray-300 md:text-3xl "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStory;
