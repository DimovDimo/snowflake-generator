const imageTypeConstant = "image/png";

document.getElementById("download-image").addEventListener("click", download);

function download() {
    let link = document.createElement("a");
    link.download = document.getElementById("file-name").value;

    let canvas = document.getElementById("snowflake-generator");
    let image = canvas.toDataURL(imageTypeConstant);
    link.href = image;

    let datasetDownload = [imageTypeConstant, link.download, link.href];
    link.dataset.downloadurl = datasetDownload.join(":");

    document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}