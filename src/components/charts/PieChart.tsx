import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ChartData,
  ArcElement,
} from "chart.js"; // Import the correct type

ChartJS.register(Tooltip, Legend, ArcElement);
interface PieChartProps {
  chartData: ChartData<"pie", number[], number>; // Use the correct ChartData type
}

const PieChart: React.FC<PieChartProps> = ({ chartData }) => {
  // Adjust chartData based on the active segment
  const adjustedChartData = {
    ...chartData,
    datasets: chartData.datasets.map((dataset, _index) => ({
      ...dataset,
      hoverOffset: 50, // Increase offset for the active slice
    })),
  };

  return <Pie data={adjustedChartData} />;
};

export default PieChart;
