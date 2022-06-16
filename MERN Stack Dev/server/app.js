const express = require('express');

const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
// const User = require('./modals/userSchema')


//link router
app.use(require('./router/auth'))

dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

//connect to database

mongoose.connect(DB).then(() => {
    console.log('connected to database')
}).catch((err) => console.log(err))

app.use(express.json());


//Middleware

const middleWare = (req, res, next) => {
    console.log("middleware is running");
    next();
}

//Routing
// app.get('/', (req, res) => {
//     res.send("hello world from the server app")
// });

app.get('/about', middleWare, (req, res) => {
    res.send("This is about")
});
app.get('/contact', (req, res) => {
    res.send("This is contact")
});
app.get('/signin', (req, res) => {
    res.send("This is in")
});
app.get('/signup', (req, res) => {
    res.send("This is up")
});
app.listen(PORT, () => {
    console.log("server is running")
});
