const http = require("http");
//we can create a web server
//this server is an event emitter // create server
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

/*
raising event
This function is asynchronous. When the server starts listening,
 the 'listening' event will be emitted. The last parameter 
 callbackwill
 be added as a listener for the 'listening' event.
 */

server.listen(3000);

console.log("Listening on port 3000...");
