google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
         ['Month', 'nos', { role: 'style' }],
         ['Jan', 1000, '#b87333'],            // RGB value
         ['Feb', 1500, 'silver'],            // English color name
         ['Mar',2547, 'gold'],

       ['April', 1267, 'color: #e5e4e2' ], // CSS-style declaration
      ]);

      var options = {
        title: 'Motivation Level Throughout the Day','width':400, 'height':300,
        hAxis: {
          title: 'Month',
         
        },
        vAxis: {
          title: 'Year'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }