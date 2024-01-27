const graphOptions: any = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      onClick: () => undefined,
      labels: {
        font: {
          size: 10
        }
      }
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
          size: 12,
          weight: 500
        }
      }
    },
    y1: {
      position: 'left',
      beginAtZero: true,

      grid: {
        display: false
      }
    },
    y2: {
      display: false,
      position: 'right',
      beginAtZero: true,
      grid: {
        display: false
      },
      max: 100
    }
  }
};

export default graphOptions;
