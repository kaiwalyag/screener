import * as React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options2 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [4,5,5,6,6,7,8],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [3,4,4,5,5,6,7],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

//Chart.defaults.scale.gridLines.drawOnChartArea = false;

const options = {
      type: 'line',      
      showScale: false,
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
  
        datasets: [{
          label: 'Revenue',
          showScale: false,
          fill: false,
          data: ["5000", "8000", "10000", "14000", "17000"],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label:'Profit',
          showScale: false,
          fill: false,
          showScale: false,
          data: ["1000", "2000", "3000", "4000", "5000"]
        }]
      },
    }


export default function SalesChart() {          
        
          // You can render any custom fallback UI
          return (
            <div>
                <Line options={options2} data={data} />
                <Line
                    data={options.data}
                    options={{
                    plugins: {
                        title: {
                        display: true,
                        text: "Users Gained between 2016-2020"
                        },
                        legend: {
                        display: false
                        }
                    }
                    }}
                />
            </div>
        );
    
    
}
