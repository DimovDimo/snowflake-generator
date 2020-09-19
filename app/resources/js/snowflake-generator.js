const centerLengthConstant = 2;

function changeEvent() {
    let container = document.getElementById("container");
    container.addEventListener("change", change);
};

changeEvent();

function change() {
    let canvas = getCanvas();
	setCanvasSize(canvas);
	
    let snowflake = getSnowflake(canvas);
	snowflakeStyle(canvas, snowflake);
	
    let iterations = getIterations();
	let splits = getSplits();
	let angle = getAngle();
	let rays = getRays();

	function raysIterations(snowflake, rays){
		for (let i = 1; i < rays; i++) {
			paintRay(0);
			snowflakeRotate(snowflake, rays);
		}
	}
	
	raysIterations(snowflake, rays);

	function paintRay(iteration) {
    	if(isClosePaintRay(iteration, iterations)) {
    		return;
		}

		snowflake.beginPath();
	}
}

change();

function getCanvas(){
    return document.getElementById("snowflake-generator");
}

function getSnowflake(canvas){
    return canvas.getContext("2d");
}

function setCanvasSize(canvas){	
	canvas.width = document.getElementById("width").value;
    canvas.height = document.getElementById("height").value;
}

function centerSnowflake(canvas, snowflake){
	let width = centerLength(canvas.width);
	let height = centerLength(canvas.height);
	
	snowflake.translate(width, height);
}

function centerLength(length){
	return length / centerLengthConstant;
}

function getIterations(){
    return document.getElementById("iterations").value;
}

function getSplits(){
	let splits = document.getElementById("splits").value;
	
    return ++splits;
}

function getAngle(){
    return document.getElementById("angle").value;
}

function snowflakeStyle(canvas, snowflake) {
	centerSnowflake(canvas, snowflake);
	setBackgroundColor(canvas, snowflake);
	setSnowflakeColor(snowflake);
	setSnowflakeAngle(snowflake);
	setLineWidth(snowflake);
}

function getBackgroundColor(){
    return document.getElementById("background").value;
}

function setBackgroundColor(canvas, snowflake){
	snowflake.fillStyle = getBackgroundColor();
	
	xCoordinate = -canvas.width;
	yCoordinate = -canvas.height;
	width = canvas.width * centerLengthConstant;
	height = canvas.height * centerLengthConstant;	
	snowflake.fillRect(xCoordinate, yCoordinate, width, height);
}

function getRays(){
    return document.getElementById("rays").value;
}

function snowflakeRotate(snowflake, rays){
    snowflake.rotate((centerLengthConstant * Math.PI) / rays);;
}

function setSnowflakeAngle(snowflake){
	let snowflakeAngle = document.getElementById("snowflake-angle").value;
	let degrees = -snowflakeAngle;
	
	snowflake.rotate(degreesToRadians(degrees));
}

function degreesToRadians(degrees){
	return (degrees * Math.PI) / 180;
}

function isClosePaintRay(iteration, iterations){
	return iteration > iterations;
}

function setSnowflakeColor(snowflake){
	snowflakeColor = document.getElementById("snowflake-color").value;
    snowflake.strokeStyle = snowflakeColor;
}

function setLineWidth(snowflake){
	lineWidth = document.getElementById("line-width").value;
    snowflake.lineWidth = lineWidth;
}