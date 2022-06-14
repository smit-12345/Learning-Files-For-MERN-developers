const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.listen(8000, "127.0.0.1");

server.on('request', (req, res) => {
    //read file normally
    // fs.readFile('datafile.txt', (err, data) => {
    //     if (err) return console.error(err);
    //     console.log(data.toString());
    //     res.end(data)
    // })


    //read file using stream
    const rstream = fs.createReadStream("datafile.txt");

    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on('end', (err) => {
        res.end();
    })
});
