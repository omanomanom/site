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

function moveForm() {
	//var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box1');
	//box1.style.left = -75 + '%';
	box2.style.left = 25 + '%';
	alert('a');
}

var opacity = 0;
var size = -10;
var myVar = setInterval(bg_load, 30);

function myStopFunction() {
    clearInterval(myVar);
}

function swapForm(active) {
	if (active == 0) {
		moveForm();
	} else if (active == 1) {
		alert('open login');
	}
}

window.onload = function() {
	document.getElementById('register').disabled;
}