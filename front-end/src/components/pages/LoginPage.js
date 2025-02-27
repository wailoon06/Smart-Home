import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate("/");
  };

  return (
    <div className="baseBG border border-black px-4 pt-3 grid grid-rows-[5rem_1fr] flex-1 h-screen">
      <div className="flex justify-between items-center relative">
        <div className="baseGreen rounded-lg w-full flex items-center px-4 py-4">
          {/* Centered Text */}
          <h1 className="flex-grow text-center lg:text-4xl titleGold">
            <a href="/">NZ HOME</a>
          </h1>
        </div>
      </div>

      <div className="baseGreen rounded-lg w-[30%] mt-10 mb-12 mx-auto">
        <div className="text-center">
          <img
            src="./image/NZHome.png"
            alt="NZ Home Logo"
            className="w-2/5 mx-auto -mb-6"
          />
          <h2 className="mb-4 subtitle text-white">Sign In</h2>

          <form>
            {/* <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="border rounded-[0.6rem] px-2 py-1 w-[60%]"
              />
            </div> */}

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border rounded-[0.6rem] px-2 py-1 w-[60%]"
                autocomplete="email"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="border rounded-[0.6rem] px-2 py-1 w-[60%]"
              />
            </div>

            <p className="pText mr-[40%] text-white">
              <a href=" " className="terms">
                {" "}
                Forgot Password
              </a>
            </p>

            <button
              type="submit"
              className="button1 bg-green-500 text-white mt-7 w-[40%] h-[6%] rounded-[1rem] mx-auto"
              onClick={handleButtonClick}
            >
              Sign In
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-t" />
              <span className="mx-4 text-white">Or</span>
              <hr className="flex-grow border-t" />
            </div>

            <button
              type="button"
              className="button2 bg-blue-500 text-white mt-7 w-[40%] h-[6%] rounded-[1rem] mx-auto"
              onClick={handleButtonClick}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
