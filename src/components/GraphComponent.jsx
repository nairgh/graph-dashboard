import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const sampleData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const GraphComponent = () => {
    const options = {
      responsive: true,
      maintainAspectRatio: false, 
    };
  const [chartType, setChartType] = useState("bar");

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return <Line data={sampleData} options={options} />;
      case "bar":
        return <Bar data={sampleData} options={options} />;
      case "pie":
        return <Pie data={sampleData} options={options} />;
      default:
        return <Line data={sampleData} options={options} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Responsive Resizable Graph Dashboard</h1>
      <div className="mb-4">
        <button
          onClick={() => setChartType("bar")}
          className={`px-4 py-2 mx-2 ${
            chartType === "bar"
              ? "bg-blue-500 text-white"
              : "bg-white border border-blue-500"
          } rounded`}
        >
          Bar
        </button>
        <button
          onClick={() => setChartType("line")}
          className={`px-4 py-2 mx-2 ${
            chartType === "line"
              ? "bg-green-500 text-white"
              : "bg-white border border-green-500"
          } rounded`}
        >
          Line
        </button>
        <button
          onClick={() => setChartType("pie")}
          className={`px-4 py-2 mx-2 ${
            chartType === "pie"
              ? "bg-purple-500 text-white"
              : "bg-white border border-purple-500"
          } rounded`}
        >
          Pie
        </button>
      </div>
      <ResizableBox
        width={600}
        height={400}
        minConstraints={[300, 200]} 
        maxConstraints={[1000, 800]} 
        resizeHandles={["se"]} 
        className="bg-white shadow rounded-lg p-4"
      >
        {renderChart()}
      </ResizableBox>
    </div>
  );
};

export default GraphComponent;
