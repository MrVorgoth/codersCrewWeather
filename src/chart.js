const connect = new XMLHttpRequest();

let temperatures = [];
connect.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/forecast?id=3081368&APPID=6d99186162ab69f549aae9f7f584c075&units=metric"
);

connect.onload = function() {
  const data = JSON.parse(connect.responseText);

  data.list.map((temp, index) => {
    if (temperatures.length > 7) {
      return;
    }
    function precise(x) {
      return Number.parseFloat(x).toPrecision(5);
    }
    let tmpTemp = "" + temp.main.temp + "";

    temperatures.push({
      temperature: precise(tmpTemp),
      recorded_time: temp.dt_txt
    });
  });
  if (temperatures.length > 0) {
    $(document).ready(function() {
      var data = {
        labels: [],
        datasets: [
          {
            label: "Temperature",
            backgroundColor: "rgba(255, 204, 0, 0.2)",
            borderColor: "rgb(255, 220, 0)",
            pointBackgroundColor: "rgb(255, 195, 0)",
            pointBorderWidth: 4,

            data: []
          }
        ]
      };

      $.each(temperatures, function(i, temp) {
        var rt = new Date(temp.recorded_time);
        var hours = rt.getHours() > 9 ? rt.getHours() : "0" + rt.getHours();
        var minutes =
          rt.getMinutes() > 9 ? rt.getMinutes() : "0" + rt.getMinutes();
        data.labels.push(hours + ":" + minutes);
        data.datasets[0].data.push(Math.round(temp.temperature * 10) / 10);
      });

      Chart.defaults.global.responsive = true;
      Chart.defaults.global.pointHitDetectionRadius = 1;
      Chart.defaults.global.scaleFontSize = 16;
      Chart.defaults.global.animationSteps = 30;

      var options = {
        legend: {
          display: false
        }
        /* tooltips: {
                    enabled: false
                }, */

        /*   scales: {
                      xAxes: [{
                          gridLines: {
                              display: false
                          }
                      }],
                      yAxes: [{
                          gridLines: {
                              display: false
                          }
                      }]
                  }, */
      };

      setTimeout(function() {
        const ctx = document.getElementById("myChart").getContext("2d");
        const myLineChart = new Chart(ctx, {
          data: data,
          type: "line",
          options: options
        });
      }, 5);
    });
  }
};

connect.send();

$("div").removeClass("chartjs-size-monitor");
