window.onload = function() {

var options = {
	title: {
		text: "Website Traffic Source"
	},
	data: [{
			type: "pie",
			startAngle: 45,
			showInLegend: "true",
			legendText: "{label}",
			indexLabel: "{label} ({y})",
			yValueFormatString:"#,##0.#"%"",
			dataPoints: [
				{ label: "Organic", y: 36 },
				{ label: "Email ", y: 31 },
				{ label: "Referrals", y: 7 },
				{ label: "Twitter", y: 10 },
				{ label: "Facebook", y: 6 },
				{ label: "Google", y: 10 },
				{ label: "Others", y: 3 }
			]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}
