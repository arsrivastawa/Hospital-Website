import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container w-full h-[80vh] flex justify-center items-center">
        <div className=" w-[25%] h-[80%] border border-slate-300 rounded-xl shadow-md">
          <div className="heading text-start px-8 text-3xl font-semibold py-8 border-b border-slate-300">
            Log in
          </div>
          <div className="form-container flex flex-col justify-center px-6 py-6 items-center">
            <input
              type="text"
              name="userid"
              id="userid"
              className="px-6 rounded-full mb-6 py-3 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
              placeholder="Enter Hospital's ID"
            />
            <input
              type="password"
              name="password"
              id="password"
              className="px-6 rounded-full py-3 mb-6 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
              placeholder="Enter Your Password"
            />
            <div className="text-end w-full underline text-sm mb-6 hover:text-black text-blue-700">
              <Link to={"/signup"}>New to VoWHELM? Sign Up</Link>
            </div>
            <button className=" rounded-full py-3 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
