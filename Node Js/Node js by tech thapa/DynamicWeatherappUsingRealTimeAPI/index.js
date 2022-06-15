const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homefile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%temp_min%}", orgVal.main.temp_min)
    temperature = temperature.replace("{%temp_min%}", orgVal.main.temp_min)
    temperature = temperature.replace("{%temp_max%}", orgVal.main.temp_max)
    temperature = temperature.replace("{%cityname%}", orgVal.name)
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main)
    // let cityName = tempVal.replace("{%cityname%}", orgVal.sys.name);
    // let minTemp = tempVal.replace("{%temp_min%}", orgVal.main.temp_min);
    console.log(temperature)
    return temperature

}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=vadodara&appid=abd5625d511225d3dd0dd6f4b1fda925')
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrayData = [objData];
                // console.log(arrayData[0].main.temp)
                // console.log(val.main.temp)
                const realTimeData = arrayData.map((val) => replaceVal(homefile, val)).join();
                res.write(realTimeData);

            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);

                res.end();
            });
    }

});
server.listen(8002, "127.0.0.1");


