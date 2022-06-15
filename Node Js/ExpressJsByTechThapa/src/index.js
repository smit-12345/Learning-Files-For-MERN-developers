const express = require("express");
const path = require("path");
const app = express();

const staticPath = path.join(__dirname, "../public")
//Built in middleware
app.use(express.static(staticPath));


app.get("/about", (req, res) => {
    res.send("This is 2nd page")
});
app.get("/temp", (req, res) => {
    res.send("This is 3rd page")
});
app.listen(8004/*port*/, /*CallBack function*/() => {
    console.log("listning")
});