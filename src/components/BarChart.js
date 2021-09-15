import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Migration 2021 (M)',
        data: [3, 2, 2],
        borderColor: [
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ]
      },
      {
        label: 'Migration 2020 (M)',
        data: [4, 3, 2],
        borderColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(54, 162, 235, 0.7)'
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(54, 162, 235, 0.7)'
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Bird Migration'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }
  return <Bar  data={data} options={options} />
}

export default BarChart
