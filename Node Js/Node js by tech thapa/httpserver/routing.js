const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("this is first")
    } else if (req.url == "/about") {
        res.end("this is about")
    } else if (req.url == "/contact") {
        res.end("This is contact")
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end('<h1>Error 404 , Page does not exist</h1>');
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("listning")
})

