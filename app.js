const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

    const data = JSON.stringify([
      { id: 1, text: "Hello" },
      { id: 2, text: "world" },
    ]);

    // res.setHeader("Content-Type", "text/plain");
    //   res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Type", "application/json");

    //   res.write("<h1>Hello world</h1>");
    res.end(data);
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});
