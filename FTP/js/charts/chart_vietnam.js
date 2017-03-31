var data, data1, options
data1 = [ [2010, 87903398], [2011, 88839839], [2012, 89828725], [2013, 90857150],[2014, 91901045],[2015, 92935470],[2016, 93976347],[2017, 95028882] ]; //  Data for x, y
data = [{label: "Population", data: data1}];
options = {
	bars: {show:true},
	legend:{position:"nw"},
	legend:{show:false},
	grid: {clickable: true, hoverable: true},
	colors: ["#FF7070"]
};


// Tooltip
$.fn.UseTooltip = function () {
    $(this).bind("plothover", function (event, pos, item) {                         
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
 
                $("#tooltip").remove();
                 
                var x = item.datapoint[0];
                var y = item.datapoint[1];                
 
                console.log(x+","+y)
 
                showTooltip(item.pageX, item.pageY,
                "<strong>" + y + " people in the year " + x + "." + "</strong> (" + item.series.label + ")"); // What is displayed in the tooltip text
            }
        }
        else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
};
 
         
// Tooltip position options
function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        top: y + 5,
        left: x + 20,
    }).appendTo("body").fadeIn(200);
}

// Makes the plot
$(document).ready(function() {
	var plot = $.plot("#placeholder", data, options);

	$("#placeholder").UseTooltip();	
});


