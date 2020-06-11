function download() {
  var python = require("python-shell");
  var path = require("path");

  var ytlink = document.getElementById("ytlink").value;
  document.getElementById("ytlink").value = "Wait";

  var options = {
    scriptPath: path.join(__dirname, "/../engine/"),
    args: [ytlink],
  };

  var pyyt = new python("run.py");
  pyyt.on("message", (message) => {
    console.log(message);
  });
}

export default download;
