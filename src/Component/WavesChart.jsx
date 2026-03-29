import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const WavesChart = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSeries([
        {
          name: "Patients",
          data: [10, 40, 25, 60, 30, 80, 50],
        },
        {
          name: "Sales",
          data: [8, 35, 20, 50, 20, 46, 40],
        },
      ])
    })
  }, [])

  const options = {
    chart: {
      type: "line",
      height: 300,
      toolbar: { show: false },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#01796F", "#f99e1e"],
    
    fill: {
      type: "gradient", // optional wave fill
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.4,
      },
    },

    markers: {
      size: 0,
      colors: ["#19ce5b", "#f99e1e"],
      strokeColors: "#fff",
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },

    states: {
        hover: {
            filter: {
            type: "lighten",
            value: 0.15,
            },
        },
    },
    dataLabels: {
    enabled: false
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    yaxis: {
      min: 0,
      max: 100, // control wave height
      tickAmount: 5,
    },

    grid: {
      borderColor: "#eee",
    },

    tooltip: {
      theme: "light",
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-300">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Weekly Patients</h2>

      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default WavesChart;