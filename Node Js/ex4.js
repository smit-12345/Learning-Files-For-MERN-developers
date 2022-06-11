function grab(flag) {
    var index = process.argv.indexOf(flag);

    return (index === -1) ? null : process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');
var by = grab('--by')

if (!user || !greeting || !by) {
    console.log("you blew it!");
} else {
    console.log(`welcome ${user},${greeting}`);
}