import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import sendSignupDetails from "../helperFunction/requests";
const Signup = () => {
  const [hidden, setHidden] = useState(true);
  const [loader, setLoader] = useState({
    padding: "20px",
    visibility: "hidden",
    cursor: "pointer",
  });
  const [warning, setWarning] = useState("");
  const [cnfHidden, setCnfHidden] = useState(true);
  const [hname, setHname] = useState("");
  const [govtID, setGovtID] = useState("");
  const [hContact, setHContact] = useState("");
  const [hEmail, setHEmail] = useState("");
  const [hAdLine1, setHAdLine1] = useState("");
  const [hAdLine2, setHAdLine2] = useState("");
  const [hState, setHState] = useState("");
  const [hDistrict, setHDistrict] = useState("");
  const [hPin, setHPin] = useState("");
  const [hCoord, setHCoord] = useState({});
  const [spocFName, setSpocFName] = useState("");
  const [spocLName, setSpocLName] = useState("");
  const [spocMobile, setSpocMobile] = useState("");
  const [spocEmail, setSpocEmail] = useState("");
  const [password, setPassword] = useState("");
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function (location) {
      // location.coords.latitude;
      // location.coords.longitude;
      // location.coords.accuracy;
      let latitude = location.coords.latitude;
      let longitude = location.coords.longitude;
      const coord = {
        lati: latitude,
        longi: longitude,
      };
      setHCoord(coord);
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${coord.lati}&lon=${coord.longi}&format=json`,
        {
          headers: {
            "User-Agent": "ID of your APP/service/website/etc. v0.1",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.display_name);
          console.table(res.address);
        });
    });
  }
  return (
    <>
      <div className="signup-container mb-4 w-full h-fit flex justify-center items-center">
        <div className=" w-[70%] h-[80%] border border-slate-300 rounded-xl shadow-md">
          <div className="heading text-start px-8 text-3xl font-semibold py-8 border-b border-slate-300">
            Sign up
          </div>
          <h1 className="px-8 text-xl font-semibold py-4 border-slate-300">
            Hospital Details:-
          </h1>
          <div className="form-container gap-4 w-full flex flex-col justify-start px-6 py-6 items-center">
            <div className="w-full">
              <label htmlFor="hname" className="p-3 text-black font-semibold">
                Hospital Name <span className="text-red-600 text-xl">*</span>
              </label>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setHname(e.target.value);
                }}
                type="text"
                name="hname"
                id="hname"
                className="px-6 rounded-full mt-1 mb-6 py-3 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                placeholder="Enter Hospital's Name"
              />
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="w-1/3">
                <label
                  htmlFor="govtid"
                  className="p-3 text-black font-semibold"
                >
                  Hospital's Govt. ID
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setGovtID(e.target.value);
                  }}
                  type="text"
                  name="govtid"
                  id="govtid"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter Hospital's Govt. ID"
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="mobile"
                  className="p-3 text-black font-semibold"
                >
                  Hospital Contact No.
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setHContact(e.target.value);
                  }}
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter Hospital's Name"
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="hospitalEmail"
                  className="p-3 text-black font-semibold"
                >
                  Hospital's Email
                  {/* <span className="text-red-600 text-xl">*</span> */}
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setHEmail(e.target.value);
                  }}
                  type="text"
                  name="hospitalEmail"
                  id="hospitalEmail"
                  className="px-6 rounded-full py-3 mt-1 mb-6 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter Hospital's Email"
                />
              </div>
            </div>
          </div>
          <h1 className="px-8 text-xl font-semibold py-4 border-slate-300">
            Address Details:-
          </h1>
          <div className="form-container gap-4 w-full flex flex-col justify-start px-6 py-6 items-center">
            <div className="w-full">
              <label
                htmlFor="address1"
                className="p-3 text-black font-semibold"
              >
                Address Line 1<span className="text-red-600 text-xl">*</span>
              </label>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setHAdLine1(e.target.value);
                }}
                type="text"
                name="address1"
                id="address1"
                className="px-6 rounded-full mt-1 mb-6 py-3 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                placeholder="Address Line 1"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="address2"
                className="p-3 text-black font-semibold"
              >
                Address Line 2
                {/* <span className="text-red-600 text-xl">*</span> */}
              </label>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setHAdLine2(e.target.value);
                }}
                type="text"
                name="address2"
                id="address2"
                className="px-6 rounded-full mt-1 mb-6 py-3 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                placeholder="Address Line 2"
              />
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="w-1/3">
                <label htmlFor="state" className="p-3 text-black font-semibold">
                  State/UT
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setHState(e.target.value);
                  }}
                  type="text"
                  name="state"
                  id="state"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter State/UT"
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="district"
                  className="p-3 text-black font-semibold"
                >
                  District
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setHDistrict(e.target.value);
                  }}
                  type="text"
                  name="district"
                  id="district"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter District"
                />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="hpostal"
                  className="p-3 text-black font-semibold"
                >
                  PIN
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setHPin(e.target.value);
                  }}
                  type="text"
                  name="hpostal"
                  id="hpostal"
                  className="px-6 rounded-full py-3 mt-1 mb-6 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter Postal Pin"
                />
              </div>
            </div>
            <div className="w-full gap-1 flex items-center">
              <button
                onClick={(e) => {
                  e.preventDefault;
                  e.stopPropagation;
                  getLocation();
                }}
                className="font-semibold rounded-full py-3 w-1/4 border-2 outline-none hover:bg-slate-100 border-slate-300"
              >
                <i className="bi mr-4 bi-geo-alt-fill"></i>
                Add Exact Coordinates
              </button>
              {"("}Helps in Locating on Map and deciding the fastest route{")"}
              <span className="text-red-600 text-xl">*</span>
            </div>
          </div>
          <h1 className="px-8 text-xl font-semibold py-4 border-slate-300">
            Hospital's SPOC Details:-
          </h1>
          <div className="form-container gap-4 w-full flex flex-col justify-start px-6 py-6 items-center">
            <div className="w-full flex flex-row gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="spocfirstname"
                  className="p-3 text-black font-semibold"
                >
                  SPOC's First Name
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSpocFName(e.target.value);
                  }}
                  type="text"
                  name="spocfirstname"
                  id="spocfirstname"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter SPOC's First Name"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="spoclastname"
                  className="p-3 text-black font-semibold"
                >
                  SPOC's Last Name
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSpocLName(e.target.value);
                  }}
                  type="text"
                  name="spoclastname"
                  id="spoclastname"
                  className="px-6 rounded-full py-3 mt-1 mb-6 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter SPOC's Second Name"
                />
              </div>
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="spocmobile"
                  className="p-3 text-black font-semibold"
                >
                  SPOC's Mobile No.
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSpocMobile(e.target.value);
                  }}
                  type="text"
                  name="spocmobile"
                  id="spocmobile"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter SPOC's Mobile No."
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="spocEmail"
                  className="p-3 text-black font-semibold"
                >
                  SPOC's Email Address
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSpocEmail(e.target.value);
                  }}
                  type="text"
                  name="spocemail"
                  id="spocemail"
                  className="px-6 rounded-full py-3 mt-1 mb-6 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter SPOC's Email Address"
                />
              </div>
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="w-1/2 relative">
                <label
                  htmlFor="password"
                  className="p-3 text-black font-semibold"
                >
                  Password
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <div
                  id="togglingEye"
                  onClick={(e) => {
                    e.preventDefault;
                    e.stopPropagation;
                    setHidden(!hidden);
                    hidden
                      ? (document.querySelector("#password").type = "text")
                      : (document.querySelector("#password").type = "password");
                  }}
                  class="absolute bottom-1/2 translate-y-[65%] right-5 cursor-pointer"
                >
                  {hidden ? (
                    <i class="bi bi-eye-fill"></i>
                  ) : (
                    <i class="bi bi-eye-slash-fill"></i>
                  )}
                </div>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  className="px-6 rounded-full mb-6 py-3 mt-1 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter SPOC's First Name"
                />
              </div>
              <div className="w-1/2 relative">
                <label
                  htmlFor="hospitalEmail"
                  className="p-3 text-black font-semibold"
                >
                  Confirm Password
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <div
                  id="cnfTogglingEye"
                  onClick={(e) => {
                    e.preventDefault;
                    e.stopPropagation;
                    setCnfHidden(!cnfHidden);

                    cnfHidden
                      ? (document.querySelector("#cnfPassword").type = "text")
                      : (document.querySelector("#cnfPassword").type =
                          "password");
                  }}
                  class="absolute bottom-1/2 translate-y-[65%] right-5 cursor-pointer"
                >
                  {cnfHidden ? (
                    <i class="bi bi-eye-fill"></i>
                  ) : (
                    <i class="bi bi-eye-slash-fill"></i>
                  )}
                </div>
                <input
                  onChange={(e) => {
                    e.preventDefault;
                    e.stopPropagation;
                    setTimeout(() => {
                      document.querySelector("#cnfPassword").value !=
                      document.querySelector("#password").value
                        ? setWarning("Password does not match")
                        : setWarning("");
                      setTimeout(() => {
                        setWarning("");
                      }, 3000);
                    }, 1000);
                  }}
                  type="password"
                  name="cnfPassword"
                  id="cnfPassword"
                  className="px-6 rounded-full py-3 mt-1 mb-6 w-full border-2 outline-none placeholder:text-slate-600 border-slate-300"
                  placeholder="Enter SPOC's Second Name"
                />
              </div>
            </div>
            <h1 id="warningmessage" className="text-red-600 font-semibold">
              {warning}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <div className="px-8 font-semibold">
              Fields marked with '
              <span className="text-red-600 text-xl">*</span>' are required.
            </div>
            <div className="hover:text-black text-blue-700 px-8 text-sm mb-6 underline">
              <Link to={"/login"}>Already Registered? Log In</Link>
            </div>
          </div>
          <div className="w-full mb-5 flex items-center flex-col justify-center">
            <button
              className="font-semibold rounded-full py-3 w-1/4 border-2 outline-none hover:bg-slate-100 border-slate-300"
              onClick={() =>
                sendSignupDetails(
                  hname,
                  govtID,
                  hContact,
                  hEmail,
                  hAdLine1,
                  hAdLine2,
                  hState,
                  hDistrict,
                  hPin,
                  hCoord,
                  spocFName,
                  spocLName,
                  spocMobile,
                  spocEmail,
                  password,
                  setWarning
                )
              }
            >
              Submit
            </button>
            <BeatLoader cssOverride={loader} color="black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
