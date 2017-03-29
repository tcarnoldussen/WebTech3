var data, data1, options
data1 = [ [2010, 1334500000], [2011, 1340910000], [2012, 1347350000], [2013, 1354040000],[2014, 1360720000],[2015, 1376048943],[2016, 1382323332],[2017, 1388232693] ]; //  Data for x, y
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


