const http = require("http");
//for this we can create a web server
//this server is an event emitter
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

//handler
// server.on("connection", (socket) => {
//   console.log("New Connection...");
// });

//listening
server.listen(3000);

console.log("Listening on port 3000...");
