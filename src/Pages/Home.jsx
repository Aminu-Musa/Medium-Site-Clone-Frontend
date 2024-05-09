import React, { useState } from "react";
import trendlogo from "../assets/img/SVGs/svg_4.svg";
import { Posts, MainPosts } from "../Static Posts/Posts";
import userIcon from "../assets/img/PNGs/png (15).png";
import categoryIcon from "../assets/img/SVGs/svg_2.svg";
import userDP from "../assets/img/JPEGs/img (27).jpg";
import blogImage from "../assets/img/JPEGs/blogImg.png";

const Home = () => {
  const [posts, SetPost] = useState(Posts);
  const [mainPosts, setMainPosts] = useState(MainPosts);

  console.log(posts);
  document.title = "Medium - Where good Ideas find you.";
  return (
    <div>
      <div className="hero bg-header-bg border-b border-black">
        <div className="wrapper pt-20 px-4 flex md:container mx-auto flex-row">
          <div className="hero-col1 py-20 md:w-1/2 ">
            <h1 className=" text-8xl font-hero-header-font">Stay curious. </h1>
            <p className="text-3xl">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <div className="btn py-2 px-9 text-white mt-9 text-xl bg-black rounded-full cursor-pointer inline-block font-semiboldbold">
              Start reading
            </div>
          </div>

          <div className="hero-col2 hidden md:block w-1/2"></div>
        </div>
      </div>

      <section className="home-section-one px-4 md:container mx-auto">
        <div className="subheader flex items-center mt-10 space-x-2">
          <img src={trendlogo} alt="" srcset="" />
          <h3 className="font-bold text-gray-900 ">Trending on Medium</h3>
        </div>

        <div className="treding-stories grid gap-6 md:grid-cols-responsive-grid container">
          {posts.map((post) => (
            <div className="trending_story_card flex items-start space-x-3 ">
              {/* POST ID */}
              <p className="text-3xl font-bold text-gray-100">0{post.id}</p>

              {/* POST DESCRIPTION */}
              <div className="story_card">
                <div className="user flex items-center space-x-2">
                  <img
                    src={userIcon}
                    alt="user_photo_thumnail"
                    className="rounded-full w-6"
                  />
                  <p className="text-sm">{post.username}</p>
                </div>
                <p className=" font-bold md: text-ellipsis overflow-hidden ">
                  {" "}
                  {post.title}
                </p>
                <div className="flex text-xs space-x-3">
                  <p>{post.createdAt}</p>
                  <p>11 mins read</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-two px-4 flex gap-20 border-t border-gray-200  flex-col-reverse md:flex-row  mt-20 pt-20 container mx-auto ">
        <div className="section-2-col-1 px-4 flex flex-col gap-10 md:w-3/5">
          {mainPosts.map((mainPost, key) => (
            <div
              className="flex justify-between items-center"
              key={mainPost.id}
            >
              <div className="mainPost">
                <div className="user flex items-center gap-3 mb-2">
                  <img src={userDP} alt="userDP" className="rounded-full w-5" />
                  <p className="text-sm font-semibold">{mainPost.username}</p>
                </div>
                <h4 className="font-bold text-xl">{mainPost.title}</h4>
                <p className="text-gray-400 font-medium">
                  {mainPost.description}
                </p>
                <div className="datePosted flex items-center gap-4 text-xs font-semibold text-slate-500 mt-2">
                  <p className="datePosted">{mainPost.createdAt}</p>
                  <p className="readTime">{mainPost.readTime}</p>
                  <p className="category bg-gray-100 py-1 px-3 rounded-full text-center">
                    {mainPost.category}
                  </p>
                </div>
              </div>
              <div className="postImg w-2/5 flex justify-end">
                <img
                  src={blogImage}
                  alt=""
                  srcset=""
                  className=" w-3/5 md: h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="section-2-col-2 px-4 mb-10  md:w-2/5 h-fit text-sm">
          <p className="font-semibold">Discover more of what matters to you </p>
          <div className="grid grid-cols-3 gap-4 mt-6 mb-7  pb-10 border-b border-slate-200">
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Programming
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Data Science
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Technology
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Self Improvement
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Writing
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Relationships
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Machine Learning
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Productivity
            </div>
            <div className="bg-gray-100 p-2 rounded-full text-center">
              Politics
            </div>
          </div>

              <footer>
                <ul className="flex gap-5 flex-wrap cursor-pointer text-sm ">
                <li>Help</li>
                <li>Status</li>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Text to speech</li>
                <li>Teams</li>
                </ul>
              </footer>
        </div>
      </section>
    </div>
  );
};

export default Home;
