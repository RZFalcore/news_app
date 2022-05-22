const Logger = require("./log");

const logger = new Logger();

logger.on("someEvent", (args) => {
  const { id, text } = args;
  console.log(`${id}: ${text}`);
});

logger.log("User logged!");
