// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Delivered', 676],
  ['Pending', 200],
  ['Failed', 876],
]);
  
  var data1 = google.visualization.arrayToDataTable([
	  ['Task', 'transport'],
	  ['Delivered', 676],
	  ['Pending', 400],
	  ['Failed', 576],
	]);

  // Optional; add a title and set the width and height of the chart
  //var options = {'title':'Chart 2', 'width':550, 'height':400};
  
  var options = {
          title: 'My Daily Activities','width':400, 'height':300,
          slices: {0: {color: '#A9A9A9'}, 1:{color: '#00FF08'}, 2:{color: '#1D7A46'}}
        };
 
  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart1.draw(data1, options);
  var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
  chart2.draw(data, options);
}