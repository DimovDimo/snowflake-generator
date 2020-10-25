const imageTypeConstant = "image/png";

document.getElementById("download-image").addEventListener("click", download);

function download() {
    let link = createDownloadLink();
    link.download = getFileName();

    let canvas = getCanvas();
    let image = canvas.toDataURL(imageTypeConstant);
    link.href = image;

    let datasetDownload = [imageTypeConstant, link.download, link.href];
    link.dataset.downloadurl = datasetDownload.join(":");

    document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function getFileName() {
	return document.getElementById("file-name").value;
}

function getCanvas() {
	return document.getElementById("snowflake-generator");
}

function createDownloadLink() {
	return document.createElement("a");
}