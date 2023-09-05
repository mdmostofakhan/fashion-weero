import React from "react";
import Chart from "./Chart";

const DashboardDetails = () => {
  return (
    <div>
         <p className="text-2xl font-black mb-8">Dashboard</p>
      <div className="flex grid-rows-4 gap-6">
        <div className="border text-center border-green-500 rounded-lg p-4 w-[280px] h-[126px]">
          <p>Total Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg p-4 w-[280px] h-[126px]">
          <p>Last Month Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg p-4 w-[280px] h-[126px]">
          <p>Last Week Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-green-500 rounded-lg p-4 w-[280px] h-[126px]">
          <p>Recent Sales</p>
          <p className="text-2xl font-semibold">৳ 75.9k</p>
        </div>
      </div>
      <Chart></Chart>
    </div>
  );
};

export default DashboardDetails;
