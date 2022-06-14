
//Make a const
const bioData = {
    name: "smit",
    age: 20,
    phNo: 8320565656,
};

//for converting object to json
const jsondata = JSON.stringify(bioData);
console.log(jsondata);


//for converting json to object 
const objData = JSON.parse(jsondata);
console.log(objData);