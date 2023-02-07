var ctx = document.getElementById("bioChart").getContext("2d");
var bioChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
        label: "Physical",
        data: [],
        borderColor: "#3e95cd",
        fill: false
      },
      {
        label: "Emotional",
        data: [],
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        label: "Intellectual",
        data: [],
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: -1,
          suggestedMax: 1
        }
      }]
    }
  }
});

function updateChart() {
  var dateInput = document.getElementById("dateInput").value;
  var selectedDate = new Date(dateInput);
  var today = new Date();
  var daysBetween = (selectedDate - today) / (1000 * 60 * 60 * 24);
  var labels = [];
  var physicalData = [];
  var emotionalData = [];
  var intellectualData = [];
  for (var i = 0; i <= daysBetween; i++) {
    labels.push(today.toDateString());
    physicalData.push(Math.sin(i * 2 * Math.PI / 23));
    emotionalData.push(Math.sin(i * 2 * Math.PI / 28));
    intellectualData.push(Math.sin(i * 2 * Math.PI / 33));
    today.setDate(today.getDate() + 1);
  }
  bioChart.data.labels = labels;
  bioChart.data.datasets[0].data = physicalData;
  bioChart.data.datasets[1].data = emotionalData;
  bioChart.data.datasets[2].data = intellectualData;
  bioChart.update();
}
