const fs = require("fs");
const http = require("http");


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("this is first")
    } else if (req.url == "/about") {
        res.end("this is about")
    } else if (req.url == "/contact") {
        res.end("This is contact")
    } else if (req.url == "/myapi") {
        fs.readFile(`C:/Users/L340 7UIN/Desktop/BySmit/Node Js/Node js by tech thapa/npm/package.json`, "utf-8", (err, data) => {
            res.end(data);

            const object = JSON.stringify(data)
            console.log(object)
        })

    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end('<h1>Error 404 , Page does not exist</h1>');
    }


});

server.listen(8001, "127.0.0.1", () => {
    console.log("listning2")
})


//Note : Use you file path

