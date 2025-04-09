import React from "react";

export const SignUp = () => {
  return (
    <div className="flex flex-col relative bg-black min-h-screen home-container-div justify-center gap-40 py-10 px-10">
      <div className="  flex justify-center items-center flex-col gap-8  ">
        <h1 className="text-white font-bold text-4xl">Sign Up</h1>
        <div className="flex flex-col gap-4">
          <input
            className="bg-[#222222] text-white px-4 py-2 rounded-md border-none"
            type="text"
            placeholder="Enter Username"
          />
          <input
            className="bg-[#222222] text-white px-4 py-2 rounded-md border-none"
            type="text"
            placeholder="Enter Email"
          />
          <input
            className="bg-[#222222] text-white px-4 py-2 rounded-md border-none"
            type="text"
            placeholder="Enter Password"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#D6FC03] absolute bottom-10 w-[80%] text-black px-4 py-2 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};
