var ctx = document.getElementById("chart2");
var chart2 = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Almost Everyday", "1-3 times / week", "4-6 times / week", "1-3 times / month"],
      datasets: [{
        label: "Frequency",
        backgroundColor: ["#e8c3b9", "#8e5ea2","#3cba9f","#3e95cd"],
        data: [2,8,2,37]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'How often do you book ticket on the App?'
      }
    //   tooltips: {
    //     enabled: false
    //   },
    //  plugins: {
    //   datalabels: {
    //       formatter: (value, ctx) => {
    //         let sum = 0;
    //         let dataArr = ctx.chart.data.datasets[0].data;
    //         dataArr.map(data => {
    //             sum += data;
    //         });
    //         let percentage = (value*100 / sum).toFixed(2)+"%";
    //         return percentage;
    //       },
    //       color: '#fff'
    //     }
    //   }
    }
});

var ctx = document.getElementById("chart1");
var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Yes", "No", "Maybe"],
      datasets: [{
        label: "Answer",
        backgroundColor: ["#e8c3b9", "#8e5ea2","#3cba9f","#3e95cd"],
        data: [34,5,10]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Are you willing to try App to book desired seats?'
      }
    }
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Less steps for booking", "Easy cancellation", "More movie details", "Notification for upcoming movies",  "Advance ticket booking", "Privacy and security", "Collobrate with social media", "Others"],
      datasets: [
        {
          label: "App functions",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [40,32,30,19,35,5,1,1]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Kind of items respondents buy online'
      }
    }
});