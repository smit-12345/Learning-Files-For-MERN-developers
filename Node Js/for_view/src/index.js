const express = require("express");
const path = require("path");
const app = express();

// const staticPath = path.join(__dirname, "../public")

//To set the view engine
app.set("view engine", "hbs");

//template engine route
app.get("", (req, res) => {
    res.render('index.hbs')
})

//Built in middleware
// app.use(express.static(staticPath));


app.get("/temp", (req, res) => {
    res.send("This is 3rd page")
});
app.listen(8004/*port*/, /*CallBack function*/() => {
    console.log("listning")
});