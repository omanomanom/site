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

function moveFormA() {
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	box1.style.top = -75 + '%';
	box2.style.top = 25 + '%';
}

function moveFormB() {
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	box2.style.top = -75 + '%';
	box1.style.top = 25 + '%';
}

var opacity = 0;
var size = -10;
var myVar = setInterval(bg_load, 30);

function myStopFunction() {
    clearInterval(myVar);
}

window.onload = function() {
	document.getElementById('register').disabled;
}
