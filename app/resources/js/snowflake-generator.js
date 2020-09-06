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
	centerSnowflake(canvas, snowflake);
	
    let iterations = getIterations();
	let splits = getSplits();
	let angle = getAngle();
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
    return document.getElementById("splits").value;
}

function getAngle(){
    return document.getElementById("angle").value;
}