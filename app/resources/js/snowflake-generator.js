let canvas = getCanvas();
let snowflake = getSnowflake(canvas);

let iterations = getIterations();

function getCanvas(){
    return document.getElementById('snowflake-generator');
}

function getSnowflake(canvas){
    return canvas.getContext('2d');
}

function getIterations(){
    return document.getElementById("iterations").value;
}