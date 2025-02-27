import React, { useRef, useEffect } from 'react';
import {Chart} from 'chart.js/auto';

function Charts() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Trading Data',
          data: [12, 19, 3, 5, 2],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
}

export default Charts;