const graphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true
    }
  },

  layout: {
    padding: 20
  },

  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'gray',
        font: {
          size: 14,
          weight: 500
        }
      }
    },
    y: {
      beginAtZero: true,
      max: 1200,
      grid: {
        display: false
      }
    }
  }
};

export default graphOptions;
