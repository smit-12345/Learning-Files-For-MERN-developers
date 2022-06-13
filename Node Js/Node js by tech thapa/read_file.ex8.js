const fs = require("fs");

const data = fs.readFileSync("file_created_by_sync_funct", "utf-8");
console.log(data);

