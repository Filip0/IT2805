function table_sort (column) {
	var table = document.getElementById('the-table-body');
	var objects = [];
	for (var r = 0, n = table.rows.length; r < n; r++) {
        var object = new Object();
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            object[c.toString()] = table.rows[r].cells[c].innerHTML;
        }
        objects.push(object);
    }
    objects.sort(function (a,b) {
    	// body...
    	if (a[column] > b[column]) {
		    return 1;
		}
		if (a[column] < b[column]) {
		    return -1;
		}
		// a must be equal to b
		return 0;
    });
    var table_string = '';
    for (var i = 0; i < objects.length; i++) {
    	table_string += "<tr><td>" + objects[i]['0'] + "</td>";
    	table_string += "<td>" + objects[i]['1'] + "</td>";
    	table_string += "<td>" + objects[i]['2'] + "</td></tr>";
    };
    table.innerHTML = table_string;
}

window.onload = function (argument) {
	document.getElementById('sort-button-1').addEventListener('click',function (){table_sort('0')});
	document.getElementById('sort-button-2').addEventListener('click',function (){table_sort('1')});
	document.getElementById('sort-button-3').addEventListener('click',function (){table_sort('2')});
	intervalID = null;
	startTime = null;
};