const fs = require("fs");

const buf_data = fs.readFileSync("file_created_by_sync_funct.txt");
console.log(buf_data);

