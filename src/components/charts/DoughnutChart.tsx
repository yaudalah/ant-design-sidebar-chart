import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);
interface doughnutChartProps {
  chartData: ChartData<"doughnut", number[], number>; // Use the correct ChartData type
}

const DoughnutChart: React.FC<doughnutChartProps> = ({ chartData }) => {
    // Adjust chartData based on the active segment
    const adjustedChartData = {
      ...chartData,
      datasets: chartData.datasets.map((dataset, _index) => ({
        ...dataset,
        hoverOffset: 50, // Increase offset for the active slice
      })),
    };
  return <Doughnut data={adjustedChartData} />;
};

export default DoughnutChart;
