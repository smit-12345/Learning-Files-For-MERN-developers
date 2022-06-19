const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log(`Database connected successfully`);
}).catch((err) => console.log(`no connection`));