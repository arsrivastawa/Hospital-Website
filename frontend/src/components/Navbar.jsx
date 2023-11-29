import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar-container py-[20px] px-20 flex justify-between items-center w-full"
        id="header"
      >
        {/* <Link to={"/dash"} >LetsGo</Link> */}
        <div className="logo-container">
          <a href="/" target="_blank">
            <img
              src="../src/assets/download.png"
              alt="logo"
              className="w-[40px] h-fit"
            />
          </a>
        </div>
        <div className="btns-container flex justify-between items-center w-[56%] text-xl">
          <div className="navigation-btn-container text-lg">
            <a href="/">
              <button className="mr-9">HOME</button>
            </a>
            <a href="#about" className="mr-9">
              <button>ABOUT US</button>
            </a>
            <a href="#about" className="relative group">
              <button>CONTACT US</button>
              <div className="absolute z-30 left-1/2 -translate-x-1/2 -top-40 duration-150 opacity-0 w-36 h-fit p-3 text-sm group-hover:opacity-100 group-hover:top-6 bg-slate-100 rounded-md">
                <div className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 my-1">
                  <i class="bi bi-instagram"></i> Instgram
                </div>
                <div className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 my-1">
                  <i class="bi bi-facebook"></i> Facebook
                </div>
                <div className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 my-1">
                  <i class="bi bi-twitter-x"></i> Twitter
                </div>
                <div className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 my-1">
                  <i class="bi bi-telephone"></i> 8877788847
                </div>
              </div>
            </a>
          </div>
          <div className="auth-btn-container flex flex-row w-fit ">
            <Link to="/signup" className="">
              <div className="hover:cursor-pointer w-fit flex flex-row items-center text-white bg-black py-4 px-[30px] rounded-lg ml-12">
                <BiSolidUser />
                Login / Register
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
