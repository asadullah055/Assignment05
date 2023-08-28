const HTTP = require("http");
const fs = require("fs");

const server = HTTP.createServer((req, res) => {
  if (req.url === "/") {
    //If you request this url '/' then the response is  "This is Home Page".
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is Home Page</h1>");

  } else if (req.url === "/about") {
    //If you request this url “/about” then the response is  “This is About Page”.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is About Page</h1>");

  } else if (req.url === "/contact") {
    //If you request this url “/contact” then the response  is “This is Contact Page”.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>This is Contact Page</h1>");

  } else if (req.url === "/file-write") {
    //If you request this url “/file-write” then fs.writeFile() method will create a file “demo.txt” and write the text “hello world” in this file.
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Error writing to file</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('<h1>File "demo.txt" created and text written</h1>');
      }
    });
  }
});

server.listen(3000);
console.log("Server is Running 3000");
