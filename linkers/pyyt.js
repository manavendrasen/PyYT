function download(link, location) {
  let { PythonShell } = require("python-shell");
  let pyshell = new PythonShell("engine/run.py");

  pyshell.send(link);
  pyshell.send(location);

  pyshell.on("message", function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
  });
}

module.exports = download;
