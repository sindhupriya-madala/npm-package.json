var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
var i = chalk.blue.bgRed.bold("This is me!!!!");
console.log(i);
if(chalk.hasColor(i)) {
  console.log(chalk.stripColor(i));
}
console.log(chalk.italic(i));

var str = "good morning everyone :)";
console.log(chalk.inverse(str));
