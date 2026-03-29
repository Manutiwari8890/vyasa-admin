import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSeries([44, 55, 13, 43])
    }, 100) 
  }, [])

  const options = {
    chart: {
      type: "donut",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },

    labels: ["Doctors", "Patients", "Staff", "Others"],

colors: ["#065f46", "#10b981", "#34d399", "#a7f3d0"],

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "24px",
              fontWeight : 600,
            },
            value: {
              show: true,
              fontSize: "18px",
              fontWeight: 600,
            },

            total: {
              show: true,
              label: "Total",
              fontSize: "18px",
              fontWeight : 600,
              offsetY: 10,
              formatter: function () {
                return 155; // 👈 your fixed value
              },
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "bottom",
    },

    tooltip: {
      theme: "light",
      enabled: false,
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-300 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        User Distribution
      </h2>
      <div className="grid grid-cols-2">
          <Chart options={options} series={series} type="donut" height={250} />
          <div className="text-right">
                <ul className="text-left pt-5 w-max ml-auto px-5">
                    <li className="flex gap-4 items-start mb-7">
                        <div className="w-2.5 h-2.5 bg-[#065f46] rounded-full"></div>
                        <div className="text-left">
                            <h6 className="text-sm font-semibold text-gray-700 -mt-2.5">Doctors</h6>
                            <p className="text-xs text-gray-500">Total : 44</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start mb-7">
                        <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full"></div>
                        <div className="text-left">
                            <h6 className="text-sm font-semibold text-gray-700 -mt-2.5">Patients</h6>
                            <p className="text-xs text-gray-500">Total : 55</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start mb-7">
                        <div className="w-2.5 h-2.5 bg-[#34d399] rounded-full"></div>
                        <div className="text-left">
                            <h6 className="text-sm font-semibold text-gray-700 -mt-2.5">Staff</h6>
                            <p className="text-xs text-gray-500">Total : 13</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start mb-7">
                        <div className="w-2.5 h-2.5 bg-[#a7f3d0] rounded-full"></div>
                        <div className="text-left">
                            <h6 className="text-sm font-semibold text-gray-700 -mt-2.5">Others</h6>
                            <p className="text-xs text-gray-500">Total : 43</p>
                        </div>
                    </li>
            </ul>
          </div>
          
      </div>
    </div>
  );
};

export default PieChart;