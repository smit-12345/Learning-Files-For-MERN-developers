var waitTime = 30000;
var currentTime = 0;
var waitInterval = 1000;

const interval = setInterval(function () {
    currentTime += waitInterval;
    console.log(`waiting from ${currentTime / 1000} seconds...`);
}, waitInterval)
console.log('wait for it');

setTimeout(function () {
    clearInterval(interval);
    console.log("comleted")
}, waitTime);


//working