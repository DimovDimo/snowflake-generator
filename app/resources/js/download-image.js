document.getElementById("download-image").addEventListener("click", download);

function download() {
    let link = document.createElement("a");
    link.download = document.getElementById("file-name").value;

    let type = "image/png";
    let canvasElement = document.getElementById("snowflake-generator");
    let image = canvasElement.toDataURL(type);
    link.href = image;

    let datasetDownload = [type, link.download, link.href];
    link.dataset.downloadurl = datasetDownload.join(":");

    document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}