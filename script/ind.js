
function bg_load() {
	var body = document.getElementById('body');
	opacity += 0.1;
	size += 0.5;
	body.style.top = size + '%';
	body.style.opacity = opacity;
	if (opacity >= 1.0) {
		myStopFunction();
	}
}

var opacity = 0;
var size = -10;
var myVar = setInterval(bg_load, 30);

function myStopFunction() {
    clearInterval(myVar);
}
