// If graph_variable = 1, then it's compare to old data, If graphe_variable = 2, then it's to others' data
// graph_compare_time = 1 if daily, 2 if weekly, 3 if monthly and 4 if yearly
graph_compare_type = 0;
graph_compare_time = 0;

function comparisonCtrl() {
    $(document).ready(function() {
    	$.ajaxSetup({ cache: false });
    	//compareOld();
    	compareAll(1, 1);
    })
}

function compareAll(type, time) {
	// changeScale pour ajuster l'échelle
	var changeScale = true;
	// increment or not the global variables
	if(type != 0) {
		graph_compare_type = type;
	}
	if(time != 0) {
		graph_compare_time = time;
	}
	// if compare with past
	if(graph_compare_type===1) {
		setButtonsType(graph_compare_type);
		var path_file_current_base = 'json/comparison/current_';
		var path_file_compare_base = 'json/comparison/old_';
		var label_chart = 'Past consumption';
		// 4 if for the time lenght : 1 = daily, 2 = weekly, 3 = monthly & 4 = yearly
		if(graph_compare_time === 1) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'daily.json';
			var path_file_compare = path_file_compare_base + 'daily.json';
			var table_labels_bar = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
			var scale_step = 10;
			var scale_step_width = 10;
		}
		if(graph_compare_time === 2) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'weekly.json';
			var path_file_compare = path_file_compare_base + 'weekly.json';
			var table_labels_bar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var scale_step = 10;
			var scale_step_width = 50;
		}
		if(graph_compare_time === 3) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'monthly.json';
			var path_file_compare = path_file_compare_base + 'monthly.json';
			var table_labels_bar = ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
			var scale_step = 10;
			var scale_step_width = 100;
		}
		if(graph_compare_time === 4) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'yearly.json';
			var path_file_compare = path_file_compare_base + 'yearly.json';
			var table_labels_bar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var scale_step = 10;
			var scale_step_width = 1000;
		}
	}
	// if compare with others
	if(graph_compare_type===2) {
		setButtonsType(graph_compare_type);
		var path_file_current_base = 'json/comparison/current_';
		var path_file_compare_base = 'json/comparison/others_';
		var label_chart = 'Others\' consumption';
		// 4 if for the time lenght : 1 = daily, 2 = weekly, 3 = monthly & 4 = yearly
		if(graph_compare_time === 1) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'daily.json';
			var path_file_compare = path_file_compare_base + 'daily.json';
			var table_labels_bar = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
			var scale_step = 10;
			var scale_step_width = 10;
		}
		if(graph_compare_time === 2) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'weekly.json';
			var path_file_compare = path_file_compare_base + 'weekly.json';
			var table_labels_bar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var scale_step = 10;
			var scale_step_width = 50;
		}
		if(graph_compare_time === 3) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'monthly.json';
			var path_file_compare = path_file_compare_base + 'monthly.json';
			var table_labels_bar = ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
			var scale_step = 10;
			var scale_step_width = 100;
		}
		if(graph_compare_time === 4) {
			setButtonsTime(graph_compare_time);
			var path_file_current = path_file_current_base + 'yearly.json';
			var path_file_compare = path_file_compare_base + 'yearly.json';
			var table_labels_bar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var scale_step = 10;
			var scale_step_width = 1000;
		}
	}
	// load the 2 JSON files
	$.getJSON(path_file_current, function(data_current) {
    	$.getJSON(path_file_compare, function(data_compare) {
    		if(graph_compare_time === 1) {
    			var data_set_current = [data_current.hour0, data_current.hour1, data_current.hour2, data_current.hour3, data_current.hour4, data_current.hour5, data_current.hour6, data_current.hour7, data_current.hour8, data_current.hour9, data_current.hour10, data_current.hour11, data_current.hour12, data_current.hour13, data_current.hour14, data_current.hour15, data_current.hour16, data_current.hour17, data_current.hour18, data_current.hour19, data_current.hour20, data_current.hour21, data_current.hour22, data_current.hour23];
    			var data_set_compare = [data_compare.hour0, data_compare.hour1, data_compare.hour2, data_compare.hour3, data_compare.hour4, data_compare.hour5, data_compare.hour6, data_compare.hour7, data_compare.hour8, data_compare.hour9, data_compare.hour10, data_compare.hour11, data_compare.hour12, data_compare.hour13, data_compare.hour14, data_compare.hour15, data_compare.hour16, data_compare.hour17, data_compare.hour18, data_compare.hour19, data_compare.hour20, data_compare.hour21, data_compare.hour22, data_compare.hour23];
			}
			if(graph_compare_time === 2) {
    			var data_set_current = [data_current.week1, data_current.week2, data_current.week3, data_current.week4, data_current.week5, data_current.week6, data_current.week7];
    			var data_set_compare = [data_compare.week1, data_compare.week2, data_compare.week3, data_compare.week4, data_compare.week5, data_compare.week6, data_compare.week7];
			}
			if(graph_compare_time === 3) {
    			var data_set_current = [data_current.month1, data_current.month2, data_current.month3, data_current.month4, data_current.month5, data_current.month6, data_current.month7, data_current.month8,data_current.month9,data_current.month10,data_current.month11,data_current.month12,data_current.month13,data_current.month14,data_current.month15,data_current.month16,data_current.month17,data_current.month18,data_current.month19,data_current.month20,data_current.month21,data_current.month22,data_current.month23,data_current.month24,data_current.month25,data_current.month26,data_current.month27,data_current.month28,data_current.month29,data_current.month30,data_current.month31];
    			var data_set_compare = [data_compare.month1, data_compare.month2, data_compare.month3, data_compare.month4, data_compare.month5, data_compare.month6, data_compare.month7, data_compare.month8,data_compare.month9,data_compare.month10,data_compare.month11,data_compare.month12,data_compare.month13,data_compare.month14,data_compare.month15,data_compare.month16,data_compare.month17,data_compare.month18,data_compare.month19,data_compare.month20,data_compare.month21,data_compare.month22,data_compare.month23,data_compare.month24,data_compare.month25,data_compare.month26,data_compare.month27,data_compare.month28,data_compare.month29,data_compare.month30,data_compare.month31];
			}
			if(graph_compare_time === 4) {
    			var data_set_current = [data_current.january, data_current.february, data_current.march, data_current.april, data_current.may, data_current.june, data_current.july, data_current.august, data_current.september, data_current.october, data_current.november, data_current.december];
    			var data_set_compare = [data_compare.january, data_compare.february, data_compare.march, data_compare.april, data_compare.may, data_compare.june, data_compare.july, data_compare.august, data_compare.september, data_compare.october, data_compare.november, data_compare.december];
			}
			// clear the containers of graph & legend ! CAUTION : avoid graph superposition
    		$('#DivComparisonBarContainer').empty();
	        $('#bar_legend_comp').empty();
	        $('#DivComparisonBarContainer').append('<canvas id="barChart" width="700" height="300"></canvas>');
	        var BarCanvas = document.getElementById("barChart");
	        var ctx = BarCanvas.getContext("2d");   
	        var data = {
	            labels: table_labels_bar,
	            datasets: [
	                {
	                    label: "Current consumption",
	                    fillColor: "rgba(179, 65, 65, 0.3)",
	                    strokeColor: "rgba(179, 65, 65, 0.6)",
			            pointColor: "rgba(179, 65, 65, 1)",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(220,220,220,1)",
	                    data: data_set_current
	                }, 
	                {
	                	label: label_chart,
						fillColor: "rgba(82, 84, 213, 0.3)",
			            strokeColor: "rgba(82, 84, 213, 0.6)",
						pointColor: "rgba(82, 84, 213, 1)",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(151,187,205,1)",
	                    data: data_set_compare
	                }
	            ]};
			var myBarChart = new Chart(ctx).Line(data, {
		        //bezierCurve: false
		       	responsive: true,
			    scaleOverride: changeScale,
			   	scaleSteps: scale_step,
		       	scaleStepWidth: scale_step_width,
		       	scaleStartValue: 0,
		       	legendTemplate : "<div class=\"col-md-6\"><ul style=\"list-style-type: none;\" class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length-1; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"> &nbsp; &nbsp; </span> &nbsp; <%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul></div><div class=\"col-md-6\"><ul style=\"list-style-type: none;\" class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=datasets.length-1; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"> &nbsp; &nbsp; </span> &nbsp;<%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul></div>"
	       	});
	       	document.getElementById('bar_legend_comp').innerHTML = myBarChart.generateLegend();
    	})
    })
}

function setButtonsTime(time_button) {
	$('#dailyButton').empty();
	$('#weeklyButton').empty();
	$('#monthlyButton').empty();
	$('#yearlyButton').empty();
	if(time_button==1) {
		$('#dailyButton').append('<button class="btn btn-warning active" onclick="compareAll(0,1);">Daily</button>');
		$('#weeklyButton').append('<button class="btn btn-warning" onclick="compareAll(0,2);">Weekly</button>');
		$('#monthlyButton').append('<button class="btn btn-warning" onclick="compareAll(0,3);">Monthly</button>');
		$('#yearlyButton').append('<button class="btn btn-warning" onclick="compareAll(0,4);">Yearly</button>');
	}
	if(time_button==2) {
		$('#dailyButton').append('<button class="btn btn-warning" onclick="compareAll(0,1);">Daily</button>');
		$('#weeklyButton').append('<button class="btn btn-warning active" onclick="compareAll(0,2);">Weekly</button>');
		$('#monthlyButton').append('<button class="btn btn-warning" onclick="compareAll(0,3);">Monthly</button>');
		$('#yearlyButton').append('<button class="btn btn-warning" onclick="compareAll(0,4);">Yearly</button>');
	}
	if(time_button==3) {
		$('#dailyButton').append('<button class="btn btn-warning" onclick="compareAll(0,1);">Daily</button>');
		$('#weeklyButton').append('<button class="btn btn-warning" onclick="compareAll(0,2);">Weekly</button>');
		$('#monthlyButton').append('<button class="btn btn-warning active" onclick="compareAll(0,3);">Monthly</button>');
		$('#yearlyButton').append('<button class="btn btn-warning" onclick="compareAll(0,4);">Yearly</button>');
	}
	if(time_button==4) {
		$('#dailyButton').append('<button class="btn btn-warning" onclick="compareAll(0,1);">Daily</button>');
		$('#weeklyButton').append('<button class="btn btn-warning" onclick="compareAll(0,2);">Weekly</button>');
		$('#monthlyButton').append('<button class="btn btn-warning" onclick="compareAll(0,3);">Monthly</button>');
		$('#yearlyButton').append('<button class="btn btn-warning active" onclick="compareAll(0,4);">Yearly</button>');
	}
}

function setButtonsType(type_button) {
	$('#pastButton').empty();
	$('#othersButton').empty();
	if(type_button==1) {
		$('#pastButton').append('<button class="btn btn-success active" id="day" onclick="compareAll(1,0);">Comparison with before</button>');
		$('#othersButton').append('<button class="btn btn-success" id="day" onclick="compareAll(2,0);">Comparison with others</button>');
	}
	if(type_button==2) {
		$('#pastButton').append('<button class="btn btn-success" id="day" onclick="compareAll(1,0);">Comparison with before</button>');
		$('#othersButton').append('<button class="btn btn-success active" id="day" onclick="compareAll(2,0);">Comparison with others</button>');
	}
}