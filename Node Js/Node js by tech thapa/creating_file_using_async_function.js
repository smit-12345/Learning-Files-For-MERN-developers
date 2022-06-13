const fs = require("fs");

fs.writeFile("async.txt", "This is async file", (err) => {
    console.log("created");
    console.log(err);
});