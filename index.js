s_h_list = [.05, .08, .13, .18, .23, .26, .34, .41, .44, .49, .55, .62]
s_t_list = [7.20, 5.38, 4.13, 3.46, 2.78, 2.60, 2.22, 2.15, 2.01, 1.95, 1.78, 1.66]

g_h_list = [.05, .08, .13, .18, .23, .26, .34, .41, .44, .49, .55, .62]
g_t_list = [0, 6.37, 4.48, 3.32, 2.79, 2.48, 2.30, 1.91, 1.85, 1.69, 1.52, 1.38]



const labels = [];
const stiklsA = [];
const gumijaA = [];


for (let i = 0; i < s_h_list.length; i++) {
  labels.push(s_h_list[i]/2);
  stiklsA.push(4/(s_t_list[i]**2));
  gumijaA.push(4/(g_t_list[i]**2));
}

 
const data = {
    labels: labels,
    datasets: [{
      label: 'STIKLA PAĀTRINĀJUMS',
      backgroundColor: 'rgb(26, 255, 102)',
      borderColor: 'rgb(202, 255, 213)',
      data: stiklsA,
    //   options: {
    //     scales: {
    //         y: {
    //           text: "aaaa"
    //         },
    //         x: {
    //           text: "aaaa"
    //         }
    //     }
    // }
    },
    {
      label: 'GUMIJAS PAĀTRINĀJUMS',
      backgroundColor: 'rgb(255, 26, 26)',
      borderColor: 'rgb(243, 142, 142)',
      data: gumijaA,
    //   options: {
    //     scales: {
    //         y: {
    //           text: "aaaa"
    //         },
    //         x: {
    //           text: "aaaa"
    //         }
    //     }
    // }
    }
  
  ],
 
};

const config = {
    type: 'line',
    data: data,
    options: {}
  };

const myChart = new Chart(
    document.getElementById('myChart'),
    config,
  );
