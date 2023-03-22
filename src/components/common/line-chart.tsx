'use client';
import { CategoryScale, Chart as ChartJS, ChartOptions, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const options: ChartOptions<'line'> = {
  responsive: true,
  aspectRatio: 589 / 294,
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: true,
        color: '#777777',
      },
      ticks: {
        display: true,
        color: 'white',
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart: React.FC<Props> = ({ data }) => {
  return <Line options={options} data={data} />;
};

export default LineChart;
