function update () {
	var element = document.getElementById('display-area');
	var time = new Date(new Date().getTime()-startTime);
	element.innerHTML = time.toISOString().slice(11,22); 
}

function toggle () {
	console.log("Toggle clicked");
	if(intervalID){
		window.clearInterval(intervalID);
		intervalID = null
	}
	else{
		if(!startTime){
			startTime = new Date().getTime();
		}
		intervalID = window.setInterval(update, 1);
	}
}
function reset () {
	console.log("Reset clicked")
	startTime = null;
	if (intervalID) {
		startTime = new Date().getTime();
	}
	else {
		intervalID = null
		
	}
	var element = document.getElementById('display-area');
	element.innerHTML = "00:00:00.000"
}

window.onload = function (argument) {
	document.getElementById('toggle-button').addEventListener('click',toggle);
	document.getElementById('reset-button').addEventListener('click',reset);
	intervalID = null;
	startTime = null;
};