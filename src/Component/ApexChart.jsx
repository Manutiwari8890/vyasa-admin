import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSeries([
        {
          name: "Revenue",
          data: [30, 45, 60, 40, 80, 25, 55],
        },
      ])
    })
  }, [])

  const options = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: true },
    },
    colors: ["#01796F"],
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "20px", // control width
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    tooltip: {
      theme: "light",
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl border border-gray-300 w-full">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Revenue Overview</h2>

        <Chart options={options} series={series} type="bar" height={300} />
      </div>
    </div>
  );
};

export default ApexChart;