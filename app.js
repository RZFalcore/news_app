const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  res.setHeader("Content-Type", "text/html");

  let basePath = "";

  switch (req.url) {
    case "/":
      basePath = createPath("index");
      break;
    case "/contacts":
      basePath = createPath("contacts");
      break;
    default:
      basePath = createPath("error");
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});
