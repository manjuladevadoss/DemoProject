google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = google.visualization.arrayToDataTable([
     ['Time', 'Order', { role: 'style' }],
     ['08:00', 10, '#e5e4e2'],            // RGB value
     ['09:00', 20, 'silver'],            // English color name
     ['10:00', 30, '#e5e4e2'],
     ['11:00', 40, 'silver' ], // CSS-style declaration
  ]);

  var options = {
    title: 'Total Work Orders','width':400, 'height':300,
    hAxis: {
      title: 'Time',
     
    },
    vAxis: {
      title: 'Order'
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}