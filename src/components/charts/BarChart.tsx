import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js'; // Import the correct type

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement
  );
interface BarChartProps {
  chartData: ChartData<"bar", number[], number>; // Use the correct ChartData type
}

const BarChart: React.FC<BarChartProps> = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;