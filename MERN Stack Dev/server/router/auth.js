const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());

router.get('/', (req, res) => {
    res.send("hello world from the server router")
});

router.post('/register', (req, res) => {
    console.log("fsdfsd");
    console.log(req);
    console.log(res);
    // res.json({ message: req.body });
    res.json("hello");
})


module.exports = router;