import React from "react";
import logo from "../assets/img/SVGs/logo.svg";
import { NavLink } from "react-router-dom";

const Partner_program = () => {
  return (
    <>
      <div className=" border-b border-black">
        <nav className="h-[15vh] px-6 flex justify-between items-center md:container mx-auto">
          <div className="logo">
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                srcset=""
                className="w-[150px] cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="sign-in-up flex gap-4">
            <div className="sign-in border-black  border px-4 py-2 rounded-full cursor-pointer">
              Sign in
            </div>
            <div className="sign-up border-black  border px-4 py-2 rounded-full text-white bg-black cursor-pointer">
              Sign up
            </div>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <div className="hero h-[85vh] bg-heroBg px-6 border-black border-b">
        <div className="wrapper bg-hero-bg-img bg-bottom bg-cover h-[100%] md:bg-auto bg-no-repeat md:bg-[25vw] flex items-center">
          <div className="hero-text md:w-3/5 flex flex-col gap-5">
            <h1 className="text-[3.5rem] leading-[1] md:text-[6rem] font-serif text-white  mb-10">
              Medium Partner Program
            </h1>

            <p className="text-white md:w-1/2 text-xl font-normal ">
              Medium’s Partner Program is for people who are interested in
              helping us fulfill our mission of deepening the collective wisdom
              of the world through personal expression, knowledge-sharing, and
              storytelling.
            </p>

            <div className="apply-btn  bg-black text-white block w-fit px-6 py-3 rounded-full">
              Apply now
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TWO */}

      <div className="section-two  border-b border-black ">
        <div className="wrapper flex flex-col py-10 px-6 md:container md:flex-row gap-6">
          <div className="left-col flex flex-col gap-5 md:w-1/2 ">
            <h2 className="font-serif text-4xl md:text-7xl w-4/5">
              Quality over clickbait
            </h2>
            <p className="font-serif md:text-xl text-gray-800 md:w-4/5 ">
              In a creator economy ruled by clickbait and ad impressions,
              Medium’s Partner Program is taking a stand for quality. As a
              partner, when your best stories are read by Medium members, a
              portion of their membership dues will be shared with you. Here are
              a few factors we consider in order to determine quality.
            </p>
          </div>

          <div className="right-col md:w-1/2 flex flex-col gap-5">
            <div className="items  py-5">
              <h3 className="font-bold">Member read time</h3>
              <p className="text-gray-700">
                Members-only stories will earn money when a member reads your
                story for 30 seconds or more, and will continue to earn more the
                longer they keep reading. Long, thoughtful, reads are
                encouraged!
              </p>
            </div>

            <div className="items border-t py-5">
              <h3 className="font-bold">Positive interactions</h3>
              <p className="text-gray-700">
                You’ll also earn more when members clap, highlight, reply, or
                engage with your story in other ways.
              </p>
            </div>

            <div className="items border-t py-5">
              <h3 className="font-bold">Follower bonus</h3>
              <p className="text-gray-700">
                When members follow you and continue to read and interact with
                your stories, you will be given a follower bonus. We encourage
                writers to share their stories with readers in a way that
                promotes community and audience building.
              </p>
            </div>

            <div className="items border-t py-5">
              <h3 className="font-bold">Boost bonus</h3>
              <p className="text-gray-700">
                Stories that are Boosted will also earn more for each read and
                interaction. We recommend that writers spend more time on fewer,
                high-quality stories to reach this bar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="last-section-footer-1 py-10 px-6 cursor-pointer hover:bg-footBg hover:text-white transition duration-350 ease-in-out border-b border-white">
        <div className="wrapper flex items-center justify-between ">
          <p className="font-serif text-5xl font-normal md:text-6xl">
            Apply now
          </p>
          <div>
            <span className="font-serif text-5xl font-normal md:text-8xl">
              →
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION 2 */}
      <div className="last-section-footer-1 py-10 px-6  bg-footBg text-white">
        <div className="wrapper font-sans FAQ">
          <p className="font-serif text-5xl font-normal md:text-6xl">FAQ</p>

          <div className="accordion-container mt-7 FAQ-1 border-b border-white pb-10">
            <div className="flex items-center justify-between">
              <p>What are the new changes for the Partner Program?</p>

              <div className="open-close">
                <div className="close-accord">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="open-accord">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" font-sans text-sm md:w-1/2">
              <p>
                We’ve updated the Partner Program to incentivize high-quality
                human writing. Here’s a quick summary: we’ve opened up the
                Partner Program to more locations, removed the 100 follower
                requirement, and require Medium membership to join. Earnings
                will be higher for stories that have repeat readers, have been
                Boosted, and that have a high read ratio. All stories will also
                earn more based on engagement signals like claps, highlights,
                and replies. Referral bonuses are being deprecated and new story
                stats will be added in so writers can better understand their
                story earnings breakdown.
              </p>

              <p className="underline mt-6 cursor-pointer">
                Read more about all of the changes and our vision for the
                Partner Program.
              </p>
            </div>
          </div>

          <div className="accordion-container mt-7 FAQ-2 border-b border-white pb-10">
            <div className="flex items-center justify-between">
              <p>
                What are the eligibility requirements to join the Partner
                Program?
              </p>

              <div className="open-close">
                <div className="close-accord">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="open-accord">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" font-sans text-sm md:w-1/2">
              <p>
                To join the Partner Program, you will need to meet the following
                eligibility requirements:
              </p>

              <ol className="ml-5 list-decimal">
                <li>Be a Medium member</li>
                <li>
                  Have published at least one story on Medium in the past 6
                  months{" "}
                </li>
                <li>Are located in a supported country</li>
                <li>Are 18 years of age or older</li>
              </ol>

              <p className="underline mt-6 cursor-pointer">
                Check out the eligibility requirements and details about the
                Partner Program.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-t border-black">
        <nav className="h-[10vh] px-2 flex flex-col gap-2 items-center justify-center md:container mx-auto md:flex-row md:justify-between">
          <div className="logo">
            <NavLink to="/">
              <img
                src={logo}
                alt=""
                srcset=""
                className="w-[150px] cursor-pointer"
              />
            </NavLink>
          </div>

          <ul className="flex gap-5 text-xs underline">
            <li className=" cursor-pointer">About </li>
            <li className=" cursor-pointer">Terms </li>
            <li className=" cursor-pointer">Privacy </li>
            <li className=" cursor-pointer">Help </li>
            <li className=" cursor-pointer">Teams</li>
            <li className=" cursor-pointer">Press</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Partner_program;
