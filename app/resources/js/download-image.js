document.getElementById("download-image").addEventListener("click", downloadImage);

function downloadImage() {
	//window.stop();
}

function download() {
    let canvasElement = document.getElementById("snowflake-generator");
    let type = "image/png";
    let url = canvasElement.toDataURL(type);
}