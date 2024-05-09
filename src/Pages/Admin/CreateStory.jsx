import React from 'react'

const CreateStory = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <form
        action=""
        method="post"
        className="flex flex-col gap-4 it md:w-1/2 "
      >
        <div className="form-group">
          <label htmlFor="fname" className="text-gray-300 text-sm">Firstname</label>
          <input
            type="text"
            name=""
            id="fname"
            className="w-full md:w-4/5 block p-2 rounded-md border-b-2 border-transparent outline-0
         focus:border-yellow-500 bg-black/25 text-white"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lname"   className="text-gray-300 text-sm">Lastname</label>
          <input
            type="text"
            name=""
            id="lname"
            className="w-full md:w-4/5 block p-2 rounded-md border-b-2 border-transparent outline-0
            focus:border-yellow-500 bg-black/25 text-white"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone"  className="text-gray-300 text-sm">Phone</label>
          <input
            type="text"
            name=""
            id="phone"
            className=" w-full md:w-4/5 block p-2 rounded-md border-b-2 border-transparent outline-0
            focus:border-yellow-500 bg-black/25 text-white"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
          <input
            type="text"
            name=""
            id="email"
            className="w-full md:w-4/5 block p-2 rounded-md border-b-2 border-transparent outline-0
            focus:border-yellow-500 bg-black/25 text-white"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="text-gray-300 text-sm">Password</label>
          <input
            type="text"
            name=""
            id="password"
            className="w-full md:w-4/5 block p-2 rounded-md border-b-2 border-transparent outline-0
            focus:border-yellow-500 bg-black/25 text-white"
          />
        </div>

        <button className="block w-fit  bg-yellow-400 px-5 py-2 rounded-md font-semibold">Submit</button>
      </form>
    </div>
  );
}

export default CreateStory
