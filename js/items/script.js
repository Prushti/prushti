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
        text: 'Functions respondants want in future App'
      }
    }
});