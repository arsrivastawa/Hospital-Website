import React, { useEffect, useState } from "react";
import { payments, reciept } from "./data";

const Dashboard = () => {
  let [sum, setSum] = useState(0);
  let [emgBeds, setEmgBeds] = useState(0);
  useEffect(() => {
    let s = 0;
    for (let x of reciept) {
      s += x.amnt;
    }
    setSum(s);
    let e = 0;
    for (let x of payments) {
      e += x.amnt;
    }
  }, []);
  return (
    <>
      <div className="dashboard-container w-1/2">
        <div className="reciepts p-12 rounded-lg f shadow-lg">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="text-black mb-7 text-[16px] flex items-center font-medium">
              NUMBER OF EMERGENCY WARD BEDS:{" "}
              <span className="inline-flex justify-center items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault;
                    e.stopPropagation;
                    setEmgBeds(emgBeds + 1);
                  }}
                  className="rounded-md m-1 aspect-square h-8 bg-blue-400 text-2xl"
                >
                  +
                </button>
                {emgBeds}
                <button
                  disabled={emgBeds ? false : true}
                  onClick={(e) => {
                    e.preventDefault;
                    e.stopPropagation;
                    setEmgBeds(emgBeds - 1);
                  }}
                  className="rounded-md m-1 aspect-square h-8 bg-blue-400 text-2xl"
                >
                  -
                </button>
              </span>
            </h1>
            <button className="px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded-md">
              Update
            </button>
          </div>
          <h1 className="text-black text-[16px] font-medium">
            LIST OF DOCTORS:
          </h1>
          {/* <div className="flex flex-row justify-between py-6 text-black">
            <h1 className="text-xs font-medium">Recent Transaction</h1>
        </div> */}
          <table className="w-full">
            <thead className="text-base w-full text-[#5D5D5D]">
              <tr>
                <td className="mxauto">Sr. No.</td>
                <td className="mxauto">Doctor's Name</td>
                <td className="mxauto">Timing</td>
                <td className="mxauto">Doctor's Id</td>
                <td className="text-end">Presence</td>
              </tr>
            </thead>
            <tbody className="w-full border-b-2 border-black border-dotted">
              {reciept.map((data, index) => {
                return (
                  <tr className="tableRow font-medium" key={index}>
                    <td>{index + 1 + "."}</td>
                    <td className="text-[14px] py-3">{data.name}</td>
                    <td className="text-[14px] py-3">
                      {data.dateFrom.getHours() > 12
                        ? data.dateFrom.getHours() -
                          12 +
                          ":" +
                          data.dateFrom.getMinutes() +
                          " PM "
                        : data.dateFrom.getHours() +
                          ":" +
                          data.dateFrom.getMinutes() +
                          " AM "}
                      -{" "}
                      {data.dateTo.getHours() > 12
                        ? data.dateTo.getHours() -
                          12 +
                          ":" +
                          data.dateTo.getMinutes() +
                          " PM"
                        : data.dateTo.getHours() +
                          ":" +
                          data.dateTo.getMinutes() +
                          " AM"}
                    </td>
                    <td className="text-[14px] py-3">{data.tran_id}</td>
                    <td className="text-[14px] py-3 text-end flex justify-around">
                      <button className="px-3 bg-blue-400 hover:bg-blue-500 rounded-md">
                        Yes
                      </button>
                      <button className="px-3 bg-blue-400 hover:bg-blue-500 rounded-md">
                        No
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full flex justify-end py-5">
            <button className="px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded-md">
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="form-container w-1/2 flex flex-row">
        <div className="reciepts p-12 rounded-lg shadow-lg"></div>
      </div>
    </>
  );
};

export default Dashboard;
