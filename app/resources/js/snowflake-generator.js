let canvas = getCanvas();
let snowflake = getSnowflake(canvas);

function getCanvas(){
    return document.getElementById('snowflake-generator');
}

function getSnowflake(canvas){
    return canvas.getContext('2d');
}