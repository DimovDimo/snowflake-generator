function changeEventDownload() {
	let container = document.getElementById("container");
	container.addEventListener("change", changeDownload);
};

changeEventDownload();

function changeDownload() {
	let canvas = document.getElementById("snowflake-generator");
    let img = canvas.toDataURL("image/png");
    //TODO
}

changeDownload();