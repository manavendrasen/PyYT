function test(link, location) {
  console.log("Cleared");
  let { PythonShell } = require("python-shell");
  let pyshell = new PythonShell("engine/test.py");

  pyshell.send(link);
  pyshell.send(location);

  pyshell.on("message", function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
  });
}
module.exports = test;
