const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});
