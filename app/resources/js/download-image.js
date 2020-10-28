const imageTypeConstant = "image/png";

document.getElementById("download-image").addEventListener("click", download);

function download() {
    let link = createDownloadLink();
    setFileName(link);
    setImage(link);
    setDownloadUrl(link);

    document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function setDownloadUrl(link) {
    let datasetDownload = [imageTypeConstant, link.download, link.href];
    link.dataset.downloadurl = datasetDownload.join(":");
}

function setImage(link) {
    let canvas = getCanvas();
    let image = canvas.toDataURL(imageTypeConstant);
    link.href = image;
}

function setFileName(link) {
	link.download = document.getElementById("file-name").value;
}

function getCanvas() {
	return document.getElementById("snowflake-generator");
}

function createDownloadLink() {
	return document.createElement("a");
}