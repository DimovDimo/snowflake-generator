const centerLengthConstant = 2;
const snowflakeLineConstant = "round";

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
	let rays = getRays();

	function raysIterations(snowflake, rays) {
		for (let i = 1; i < rays; i++) {
			paintRay(0);
			snowflakeRotate(snowflake, rays);
		}
	}

	raysIterations(snowflake, rays);


	function paintRay(iteration) {
		if (isClosePaintRay(iteration, iterations)) {
			return;
		}

		snowflakeDraw(snowflake);

		function paintRecursion() {
			let splits = getSplits();
			let angle = getAngle();
			let offset = getOffset();
			let spin = getSpin();

			for (let startSplits = getStartSplits(); startSplits < splits; startSplits++) {
				snowflake.save();

				snowflakeTranslateSpin(startSplits, splits, offset, snowflake, spin);
				snowflakeScale(snowflake);

				snowflakeRecursion(snowflake, angle, paintRay, iteration);
				snowflakeRecursion(snowflake, -angle, paintRay, iteration);

				snowflake.restore();
			}
		}

		paintRecursion();
	}

	paintRay(0);
}

change();

function snowflakeRecursion(snowflake, angle, paintRay, iteration) {
	snowflake.save();
	snowflake.rotate(angle);
	paintRay(iteration + 1);
	snowflake.restore();
}

function snowflakeScale(snowflake) {
	let scaleWidthPercent = document.getElementById("scale-width").value;
	let scaleHeightPercent = document.getElementById("scale-height").value;

	let scaleWidth = getScale(scaleWidthPercent);
	let scaleHeight = getScale(scaleHeightPercent);

	snowflake.scale(scaleWidth, scaleHeight);
}

function snowflakeTranslateSpin(startSplits, splits, offset, snowflake, spin) {
	let snowflakeTranslate = getSnowflakeTranslate(startSplits, splits, offset);
	snowflake.translate(snowflakeTranslate, spin);
}

function getCanvas() {
	return document.getElementById("snowflake-generator");
}

function getSnowflake(canvas) {
	return canvas.getContext("2d");
}

function setCanvasSize(canvas) {
	canvas.width = document.getElementById("width").value;
	canvas.height = document.getElementById("height").value;
}

function centerSnowflake(canvas, snowflake) {
	let width = centerLength(canvas.width);
	let height = centerLength(canvas.height);

	snowflake.translate(width, height);
}

function centerLength(length) {
	return length / centerLengthConstant;
}

function getIterations() {
	return document.getElementById("iterations").value;
}

function getSplits() {
	let splits = document.getElementById("splits").value;

	return ++splits;
}

function getAngle() {
	return document.getElementById("angle").value;
}

function snowflakeStyle(canvas, snowflake) {
	centerSnowflake(canvas, snowflake);
	setBackgroundColor(canvas, snowflake);
	setSnowflakeColor(snowflake);
	setSnowflakeAngle(snowflake);
	setLineWidth(snowflake);
	setLineCap(snowflake);
}

function getBackgroundColor() {
	return document.getElementById("background").value;
}

function setBackgroundColor(canvas, snowflake) {
	snowflake.fillStyle = getBackgroundColor();

	let xCoordinate = -canvas.width;
	let yCoordinate = -canvas.height;
	let width = canvas.width * centerLengthConstant;
	let height = canvas.height * centerLengthConstant;
	snowflake.fillRect(xCoordinate, yCoordinate, width, height);
}

function getRays() {
	return document.getElementById("rays-count").value;
}

function snowflakeRotate(snowflake, rays) {
	snowflake.rotate((centerLengthConstant * Math.PI) / rays);;
}

function setSnowflakeAngle(snowflake) {
	let snowflakeAngle = document.getElementById("snowflake-angle").value;
	let degrees = -snowflakeAngle;

	snowflake.rotate(degreesToRadians(degrees));
}

function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
}

function isClosePaintRay(iteration, iterations) {
	return iteration > iterations;
}

function setSnowflakeColor(snowflake) {
	let snowflakeColor = document.getElementById("snowflake-color").value;
	snowflake.strokeStyle = snowflakeColor;
}

function setLineWidth(snowflake) {
	let lineWidth = document.getElementById("line-width").value;
	snowflake.lineWidth = lineWidth;
}

function setLineCap(snowflake) {
	snowflake.lineCap = snowflakeLineConstant;
}

function snowflakeRays(snowflake) {
	snowflakeMove(snowflake);
	snowflakeLine(snowflake);
}

function snowflakeMove(snowflake) {
	let raysBasis = document.getElementById("rays-basis").value;
	let raysRotation = document.getElementById("rays-rotation").value;

	snowflake.moveTo(raysBasis, raysRotation);
}

function snowflakeLine(snowflake) {
	let raysLength = document.getElementById("rays-length").value;
	let raysDisplacement = document.getElementById("rays-displacement").value;

	snowflake.lineTo(raysLength, raysDisplacement);
}

function snowflakeDraw(snowflake) {
	snowflake.beginPath();
	snowflakeRays(snowflake);
	snowflake.stroke();
}

function getStartSplits() {
	return document.getElementById("start-splits").value;
}

function getOffset() {
	return document.getElementById("rays-offset").value;
}

function getSpin() {
	return document.getElementById("rays-spin").value;
}

function getSnowflakeTranslate(startSplits, splits, offset) {
	return (offset * startSplits) / splits;
}

function getScale(percent) {
	return percent / 100;
}