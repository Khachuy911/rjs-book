import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { ChartType } from '../../enums/chartType.enum';
function Charts({ chartData, chartType, chartName, chartText }) {
  const chartOption = {
    interaction: {
      intersect: false,
      mode: 'index'
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${chartText}`
      },
      legend: {
        display: true
      }
    }
  };
  const ChartComponent = chartType === ChartType.Line ? Line : Pie;
  return (
    <div className='chart-container'>
      <h2 style={{ textAlign: 'center' }}>{chartName}</h2>
      <ChartComponent data={chartData} options={chartOption} />
    </div>
  );
}
export default Charts;
