const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("This is 1st page")
});
app.get("/about", (req, res) => {
    res.send("This is 2nd page")
});
app.get("/temp", (req, res) => {
    res.send("This is 3rd page")
});
app.listen(8004/*port*/, /*CallBack function*/() => {
    console.log("listning")
});