s_h_list = [.05, .08, .13, .18, .23, .26, .34, .41, .44, .49, .55, .62]
s_t_list = [7.20, 5.38, 4.13, 3.46, 2.78, 2.60, 2.22, 2.15, 2.01, 1.95, 1.78, 1.66]

g_h_list = [.05, .08, .13, .18, .23, .26, .34, .41, .44, .49, .55, .62]
g_t_list = [10000, 6.37, 4.48, 3.32, 2.79, 2.48, 2.30, 1.91, 1.85, 1.69, 1.52, 1.38]



const labels = [0];
const stiklsA = [0];
const gumijaA = [0];
const stiklsAT = [0];
const gumijaAT = [0];

for (let i = 0; i < s_h_list.length; i++) {
  labels.push("sin α = "+s_h_list[i]/2);
  stiklsA.push(4/(s_t_list[i]**2));
  gumijaA.push(4/(g_t_list[i]**2));

  stiklsAT.push(s_h_list[i]/2*10);
  gumijaAT.push((s_h_list[i]/2*10));
}

 
const data1 = {
    labels: labels,
    datasets: [{
      label: 'STIKLA PAĀTRINĀJUMS',
      backgroundColor: 'rgb(26, 255, 102)',
      borderColor: 'rgb(202, 255, 213)',
      data: stiklsA,
      pointRadius: 5,
      pointHoverRadius: 10
    },
    {
      label: 'TOERĒTISKAIS STIKLA PAĀTRINĀJUMS',
      backgroundColor: 'rgb(113, 151, 255)',
      borderColor: 'rgb(113, 151, 255)',
      data: stiklsAT,
      pointRadius: 1,
      pointHoverRadius: 1
    }
  
  ],
};

const data2 = {
  labels: labels,
  datasets: [{
    label: 'GUMIJAS PAĀTRINĀJUMS',
    backgroundColor: 'rgb(255, 26, 26)',
    borderColor: 'rgb(243, 142, 142)',
    data: gumijaA,
    pointRadius: 5,
    pointHoverRadius: 10
  },
  {
    label: 'TOERĒTISKAIS GUMIJAS PAĀTRINĀJUMS',
    backgroundColor: 'rgb(113, 151, 255)',
    borderColor: 'rgb(113, 151, 255)',
    data: gumijaAT,
    pointRadius: 1,
    pointHoverRadius: 1
  }

],
};

const config1 = {
    type: 'line',
    data: data1,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Lodītes paātrinājuma noteikšana stikla bumbiņai"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                return value+' m/s²';
            }
        }
          
        },
        x: {
          beginAtZero: true,
        }
      }
  }
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Lodītes paātrinājuma noteikšana gumijas bumbiņai"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, ticks) {
              return value+' m/s²';
          }
      }
        
      },
      x: {
        beginAtZero: true,
      }
    }
}
};


const myChart1 = new Chart(
  document.getElementById('myChart1'),
  config1,
);

  
const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2,
);
