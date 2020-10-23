document.getElementById("download-image").addEventListener("click", download);

function download() {
    let link = document.createElement("a");
    link.download = document.getElementById("file-name").value;

    let type = document.querySelector('input[name="image-type"]:checked').value;
    let canvas = document.getElementById("snowflake-generator");
    let quality = getQuality(type);
    let image = canvas.toDataURL(type, quality);
    link.href = image;

    let datasetDownload = [type, link.download, link.href];
    link.dataset.downloadurl = datasetDownload.join(":");

    document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function getQuality(type) {
	if(type.localeCompare("image/jpeg")){
        return document.getElementById("snowflake-generator").value / 100;
    }

    return undefined;
}