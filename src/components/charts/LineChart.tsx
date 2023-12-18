import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartData, PointElement, LineElement } from 'chart.js'; // Import the correct type

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );
interface LineChartProps {
  chartData: ChartData<"line", number[], number>; // Use the correct ChartData type
}

const LineChart: React.FC<LineChartProps> = ({ chartData }) => {
  return <Line data={chartData} />;
};

export default LineChart;