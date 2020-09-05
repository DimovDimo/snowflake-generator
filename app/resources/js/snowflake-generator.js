const centerLengthConstant = 2;

function changeEvent() {
    let container = document.getElementById("container");
    container.addEventListener("change", change);
};

changeEvent();

function change() {
    let canvas = getCanvas();
    let snowflake = getSnowflake(canvas);
	setCanvasSize(canvas);
    let iterations = getIterations();
	let splits = getSplits();
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