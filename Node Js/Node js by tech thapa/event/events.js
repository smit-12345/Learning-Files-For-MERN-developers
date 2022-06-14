const EventEmiter = require("events");

const event = new EventEmiter();

//WE can add many functions in one event like this 

event.on("myName", () => {
    console.log("my name is smit")
});

event.on("myName", () => {
    console.log("My surname is suthar")
});

event.on("myName", () => {
    console.log("My surname is suthar")
});

event.emit("myName")