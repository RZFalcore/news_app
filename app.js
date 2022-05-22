const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./docs/text.txt");
const writeStream = fs.createWriteStream("./docs/new-text.txt");
const compressedStream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//   writeStream.write("\n ---CHUNK START--- \n");
//   writeStream.write(chunk);
//   writeStream.write("\n ---CHUNK END--- \n");
// });

const errorHandler = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Error occured...");
};

readStream
  .on("error", errorHandler)
  .pipe(compressedStream)
  .pipe(writeStream)
  .on("error", errorHandler);
