(function () {
    let container = document.getElementById("container");
    container.addEventListener("change", change);
}());

function change() {
    let canvas = getCanvas();
    let snowflake = getSnowflake(canvas);
    let iterations = getIterations();
}

change();

function getCanvas(){
    return document.getElementById("snowflake-generator");
}

function getSnowflake(canvas){
    return canvas.getContext("2d");
}

function getIterations(){
    return document.getElementById("iterations").value;
}