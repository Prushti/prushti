var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Real-time updates and notification", "Live map of bus location", "Fare information and in app payment", "Notification for any time changes",  "Saving favorite location for quicker access", "Ability to plan and save used routes", "Offline access to map and schedules", "N/A - I like my app the way they are"],
      datasets: [
        {
          label: "App functions",
          backgroundColor: ["#009CDE", "#003C71","#FFCD00","#FF9100","#760145","#14A647"],
          data: [60,27.8,60,60,60,20,0,0]
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
