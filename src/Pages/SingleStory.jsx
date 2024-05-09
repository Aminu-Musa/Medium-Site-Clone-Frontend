import React, { useState } from "react";
import { LoggedInUserNavBar } from "../components/LoggedInUserNavBar";
import userDP from "../assets/img/JPEGs/userDP.jpg";
import postImg from "../assets/img/JPEGs/postImg.webp";
import postImg2 from "../assets/img/JPEGs/postImg2.webp";
import postImg3 from "../assets/img/JPEGs/postImg3.webp";
import userCommentIcon from "../assets/img/PNGs/userCommentIcon.png";

const SingleStory = () => {
  const [commentBar, setCommentBar] = useState(false);

  // const handleClick = ()=>{

  // }

  return (
    <div className="relative">
      <LoggedInUserNavBar />
      <main className="px-4 md:w-1/2 mx-auto mt-16 p-10">
        <h1 className="title font-bold text-3xl md:text-4xl ">
          Insanity in the Air: The crash of Pakistan International Airlines
          flight 8303
        </h1>

        <div className="user flex items-center gap-4 my-10">
          <div className="userDP">
            <img src={userDP} alt="" srcset="" className="rounded-full" />
          </div>
          <div className="userAccount">
            <div className="flex gap-2">
              <p className="hover:underline cursor-pointer">
                Admiral Cloudberg
              </p>
              .{" "}
              <p className="text-green-600 cursor-pointer hover:text-green-700">
                Follow
              </p>
            </div>
            <div className="flex gap-2 text-sm text-gray-500">
              <p>54 min read </p>.<p> 4 days ago</p>
            </div>
          </div>
        </div>

        <div className="action-btn flex justify-between border-y py-3">
          <div className="likes-comment-btn flex gap-4">
            <div className="likes-btn cursor-pointer opacity-70 hover:opacity-100">
              <div className="flex gap-1 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="clap"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                  ></path>
                </svg>
                <span>3.8k</span>
              </div>
            </div>
            <div
              className="comment-btn cursor-pointer opacity-70 hover:opacity-100"
              onClick={() => setCommentBar(true)}
            >
              <div className="flex gap-1 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" class="le">
                  <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                </svg>
                <span>45</span>
              </div>
            </div>
          </div>

          <div className="save-listen-share-btn flex gap-4">
            <div className="save-btn cursor-pointer opacity-70 hover:opacity-100">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                class="dt lk"
                aria-label="Add to list bookmark button"
              >
                <path
                  d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div className="listen-btn cursor-pointer opacity-70 hover:opacity-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0zm9-10a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.38 10.42l-4.6 3.06a.5.5 0 0 1-.78-.41V8.93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="share-btn cursor-pointer opacity-70 hover:opacity-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="postImg mt-10">
          <img src={postImg} alt="" srcset="" className=" cursor-zoom-in" />
          <p className="text-center text-sm text-gray-600">
            Charred wreckage fills a residential street in Karachi after the
            crash of flight 8303. (AP)
          </p>
        </div>
        <section className="flex flex-col gap-5 mt-10 font-serif text-gray-600 text-lg md:text-xl">
          <p>
            On the 22nd of May 2020, a Pakistan International Airlines A320 on
            approach to Karachi slammed into a residential neighborhood just
            short of the runway, killing 97 of the 99 people on board and one on
            the ground. Only two survivors miraculously escaped the burning
            rubble.
          </p>
          <p>
            The story that eventually emerged from the wreckage defies rational
            comprehension: after an approach so steep it bordered on madness,
            the crew set the plane down on the runway apparently without having
            extended the landing gear, causing the aircraft to slide on its
            engines for nearly a kilometer. And then, as if that wasn’t enough,
            after skidding across the ground for 18 seconds, the crew managed to
            pull the plane back into the air and climb to 3,000 feet — only for
            both damaged engines to fail, leaving the aircraft with insufficient
            power to return to the airport. The annals of aviation history
            contain few comparable accidents. In fact, the sequence of errors,
            reckless decisions, and baffling misbehavior that enabled the
            disaster surpasses all but the most irredeemable blunders of the
            past, calling into question Pakistan International Airlines’ ability
            to carry passengers with anything close to an acceptable level of
            safety. And in order to fix this deep-seated rot, sweeping changes
            are most likely needed — not only to safety rules and enforcement,
            but to the culture of patronage and corruption whose tendrils reach
            into every corner of Pakistan’s troubled flag carrier.
          </p>

          <div className="postImg mt-10">
            <img src={postImg2} alt="" srcset="" className=" cursor-zoom-in" />
            <p className="text-center text-sm text-gray-600">
              A real — yes, real — Facebook advertisement posted by PIA.
            </p>
          </div>

          <p>
            The state-owned Pakistan International Airlines, or PIA, has been
            part of the global face of Pakistan since the 1950s, bringing
            countless travelers to and from the world’s fifth most populous
            country for well over 70 years. PIA was once among the only
            respected airlines in the region, so much so in fact that when the
            United Arab Emirates set up its own flag carrier in 1985 — creating
            the highly regarded airline now known as Emirates — it was PIA whom
            they approached for help. Nevertheless, PIA has never had a
            particularly strong safety record. Between 1970 and 2020, the
            airline suffered one fatal accident on average every five years,
            which is particularly poor when considering that its average fleet
            size during the aforementioned period was only around three dozen
            aircraft. Advances in aviation safety in recent years have also
            failed to stem the bloodshed, and in fact PIA has had three fatal
            crashes in the 21st century so far, more than almost any other flag
            carrier.
          </p>
          <div className="postImg mt-10">
            <img src={postImg3} alt="" srcset="" className=" cursor-zoom-in" />
            <p className="text-center text-sm text-gray-600">
              A real — yes, real — Facebook advertisement posted by PIA.
            </p>
          </div>

          <p>
            The most recent disaster to mar PIA’s record was also perhaps its
            most preventable, and most damning.
          </p>

          <p>
            In May 2020, the world was still in the grip of the Covid-19
            pandemic, which resulted in the deaths of millions and reshaped
            daily life for virtually everyone on earth. In Pakistan, almost all
            domestic flights were grounded from late March in order to control
            the spread of the disease, with some scheduled services resuming
            only on May 16th. At Jinnah International Airport in Karachi,
            Pakistan’s largest city, the number of daily arrivals had dropped to
            just 8, from 77 in January and February, and airports and airlines
            alike were still operating with reduced staff.
          </p>

          <p>
            Less than a week into this resumption of service, on May 22nd, 91
            passengers and 8 crew arrived at Allama Iqbal International Airport
            in Lahore, Pakistan’s second largest city and the capital of Punjab
            province, for a regularly scheduled PIA flight to Karachi. The
            weather that day was clear, the Lahore-Karachi route was a
            bread-and-butter service familiar to the crew, and the Airbus A320
            provided for the trip was in good working order — certainly there
            was nothing to indicate that risk was above baseline levels for any
            reason other than the general pandemic disruption.
          </p>
        </section>
      </main>

      {/* COMMMENT MODAL BOX */}
      <div
        className={
          commentBar
            ? "modal-comment cursor-pointer h-screen w-[cal(100%-400px)] bg-black/10 -z-0 fixed top-0 left-0 right-0 bottom-0"
            : "hidden"
        }
      >
        <div className="modal bg-white w-[400px] fixed right-0 h-screen overflow-y-auto p-6 z-30 cursor-default shadow-xl">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">Responses (43)</h1>
            <div className="flex gap-3">
              <div className="security-lock cursor-pointer">
                <svg width="25" height="25" viewBox="0 0 25 25">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.99 5.04c.26-.21.64-.22.91-.01.97.72 1.77 1.21 2.6 1.54.83.32 1.72.48 2.89.5.41.01.74.35.74.76-.02 3.62-.43 6.26-1.45 8.21-1.03 1.98-2.66 3.21-4.97 4.08a.75.75 0 0 1-.53 0c-2.25-.87-3.86-2.1-4.9-4.07-1.02-1.95-1.46-4.59-1.48-8.22 0-.41.33-.75.75-.76 1.19-.02 2.1-.18 2.92-.5.82-.32 1.6-.81 2.52-1.53zm.46.9c-.9.69-1.71 1.21-2.62 1.56a8.9 8.9 0 0 1-3.02.57c.03 3.45.46 5.82 1.36 7.51.88 1.69 2.25 2.77 4.28 3.57 2.1-.8 3.47-1.89 4.34-3.57.89-1.7 1.3-4.07 1.34-7.51a8.8 8.8 0 0 1-3-.57 11.8 11.8 0 0 1-2.68-1.56zm0 9.15a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34zm0 1a3.67 3.67 0 1 0 0-7.34 3.67 3.67 0 0 0 0 7.34zm-1.82-3.77l.53-.53.91.92 1.63-1.63.52.53-2.15 2.15-1.44-1.44z"
                  ></path>
                </svg>
              </div>
              <div
                className="close cursor-pointer"
                onClick={() => setCommentBar(false)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="ef dw eh eg"
                >
                  <path
                    d="M5 5l7 7m7 7l-7-7m0 0l7-7m-7 7l-7 7"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* ADD NEW COMMENT TEXT-AREA */}
          <div className=" bg-white rounded mt-6 p-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)] h-50">
            <div className="mb-6 flex items-center gap-2">
              <img
                src={userCommentIcon}
                alt=""
                srcset=""
                className="rounded-full"
              />
              <p className="text-sm">Aminu Musa</p>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="What are your thoughts?"
              className=" w-full border-none outline-none  h-40 resize-none e text-sm"
            ></textarea>
            <div className="  flex items-center justify-between">
              <div className="formatter font-serif flex gap-6 font-bold text-xl text-gray-400">
                <p className=" cursor-pointer  px-2 rounded-md hover:bg-slate-200">
                  <em>B</em>
                </p>
                <p className=" cursor-pointer  px-2 rounded-md hover:bg-slate-200">
                  <em>i</em>
                </p>
              </div>
              <div className="send_cancel flex gap-2 text-sm items-center">
                <div className=" cursor-pointer px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-gray-50">
                  Cancel
                </div>
                <div className=" cursor-pointer bg-green-400 text-white px-3 py-2 rounded-full ransition duration-200 ease-in-out hover:bg-green-500">
                  Respond
                </div>
              </div>
            </div>
          </div>

          {/* COMMENTS SECTION */}
          <div className="comment-filter flex items-center gap-2 pt-10 pb-5 mb-10 border-b">
            <h3 className="text-sm font-bold">MOST RELEVANT </h3>
            <svg width="19" height="19" class="abv">
              <path
                d="M3.9 6.77l5.2 5.76.43.47.43-.47 5.15-5.7-.85-.77-4.73 5.25L4.75 6z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>

          {/* COMMENTS */}
          <div className="user-comment flex flex-col gap-8">
            <div className="single_comment_box border-b ">
              <div className="commented-user flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <div className="image">
                    <img
                      src={userCommentIcon}
                      alt=""
                      srcset=""
                      className="rounded-full "
                    />
                  </div>
                  <div className="user-post-details text-sm flex flex-col">
                    <p className=" text-base">Aminu Musa</p>
                    <p className="text-gray-600">5 days ago</p>
                  </div>
                </div>
                <svg
                  class="overflow-dots-filled-25px_svg__svgIcon-use"
                  width="25"
                  height="25"
                >
                  <path
                    d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="comments mt-7 text-sm flex flex-col gap-5">
                <p>
                  Another outstanding analysis of an horrific — and utterly
                  unnecessary — accident.{" "}
                </p>

                <p>
                  Is difficult to believe a high-hours pilot like Gul was so
                  completely unsuited to command. Indeed, he must’ve scraped by
                  on dumb luck for most of his career as his intellect, skills
                  and judgment were of such appallingly low caliber.{" "}
                </p>

                <p>
                  The E.U. and U.S. do the rest of the world a favor by banning
                  these rat trap carriers from their airspace.
                </p>
              </div>

              <div className="action_btn flex justify-between items-center py-4">
                <div className="flex gap-1 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="clap"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                    ></path>
                  </svg>
                  <span className="text-sm">64</span>
                </div>
                <span className="text-sm">Reply</span>
              </div>
            </div>

            <div className="single_comment_box border-b ">
              <div className="commented-user flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <div className="image">
                    <img
                      src={userCommentIcon}
                      alt=""
                      srcset=""
                      className="rounded-full "
                    />
                  </div>
                  <div className="user-post-details text-sm flex flex-col">
                    <p className=" text-base">Aminu Musa</p>
                    <p className="text-gray-600">5 days ago</p>
                  </div>
                </div>
                <svg className="cursor-pointer" width="25" height="25">
                  <path
                    d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="comments mt-7 text-sm flex flex-col gap-5">
                <p>
                  Another outstanding analysis of an horrific — and utterly
                  unnecessary — accident.
                </p>

                <p>
                  Is difficult to believe a high-hours pilot like Gul was so
                  completely unsuited to command. Indeed, he must’ve scraped by
                  on dumb luck for most of his career as his intellect, skills
                  and judgment were of such appallingly low caliber.
                </p>

                <p>
                  The E.U. and U.S. do the rest of the world a favor by banning
                  these rat trap carriers from their airspace.
                </p>
              </div>

              <div className="action_btn flex justify-between items-center py-4">
                <div className="flex gap-1 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="clap"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                    ></path>
                  </svg>
                  <span className="text-sm">64</span>
                </div>
                <span className="text-sm">Reply</span>
              </div>
            </div>

            <div className="single_comment_box border-b ">
              <div className="commented-user flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <div className="image">
                    <img
                      src={userCommentIcon}
                      alt=""
                      srcset=""
                      className="rounded-full "
                    />
                  </div>
                  <div className="user-post-details text-sm flex flex-col">
                    <p className=" text-base">Aminu Musa</p>
                    <p className="text-gray-600">5 days ago</p>
                  </div>
                </div>
                <svg
                  class="overflow-dots-filled-25px_svg__svgIcon-use"
                  width="25"
                  height="25"
                >
                  <path
                    d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="comments mt-7 text-sm flex flex-col gap-5">
                <p>
                  Another outstanding analysis of an horrific — and utterly
                  unnecessary — accident.{" "}
                </p>

                <p>
                  Is difficult to believe a high-hours pilot like Gul was so
                  completely unsuited to command. Indeed, he must’ve scraped by
                  on dumb luck for most of his career as his intellect, skills
                  and judgment were of such appallingly low caliber.{" "}
                </p>

                <p>
                  The E.U. and U.S. do the rest of the world a favor by banning
                  these rat trap carriers from their airspace.
                </p>
              </div>

              <div className="action_btn flex justify-between items-center py-4">
                <div className="flex gap-1 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="clap"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                    ></path>
                  </svg>
                  <span className="text-sm">64</span>
                </div>
                <span className="text-sm">Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStory;
