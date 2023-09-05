import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const ReChart = () => {
  const data = [
    {
      name: "2015",
      pv: 0,
      amt: 5,
    },
    {
      name: "2016 ",
      pv: 0,
      amt: 4,
    },
    {
      name: "2017",
      uv: 2000,
      pv: 0,
      amt: 3,
    },
    {
      name: "2018",
      uv: 2780,
      pv: 0,
      amt: 2,
    },
    {
      name: "2019",
      uv: 1890,
      pv: 0,
      amt: 2.5,
    },
    {
      name: "2020",
      uv: 2390,
      pv: 0,
      amt: 3,
    },
  ];

  return (
    <div className="border border-green-600 rounded-2xl mt-12 w-[650px] h-[370px]">
           <div className="flex justify-between mx-12 mt-4">
           <p>Claims Over the Years</p>
           <div>
              <p>Total Sales</p>
              <p>Total Income</p>
           </div>
       </div>
       <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip></Tooltip>
        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ReChart;
