const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/ok', (req, res) => {
    res.send(req.body.name)
    console.log("hello")
})

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(8006, () => {
    console.log("connected")
})