const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  log = (msg) => {
    console.log(msg);
    this.emit("someEvent", { id: 1, text: "Hello there!" });
  };
}

module.exports = Logger;
