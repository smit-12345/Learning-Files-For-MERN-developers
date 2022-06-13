//used chalk module after installing it
//import
const chalk = require("chalk");
//used
console.log(chalk.red("hello world"))



//used validator module after installing it
//import
const validator = require('validator');
//used
const validation = validator.isEmail('smit@gmail.com');
console.log(validation ? chalk.green.inverse(validation) : chalk.red.inverse(validation));


