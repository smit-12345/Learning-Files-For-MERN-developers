const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.listen(8002, "127.0.0.1");

server.on('request', (req, res) => {

    const rstream = fs.createReadStream("datafile.txt");

    rstream.pipe(res);
    console.log(rstream);

});
