let ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["1950","1970","1990","2010","2024"],
    datasets: [{
      label: "AQI Trend",
      data: [50, 80, 120, 90, 65],
      borderWidth: 2
    }]
  }
});