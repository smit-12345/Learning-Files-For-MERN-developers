var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your favorite programming language"
];

var answers = [];

function ask(i) {
    process.stdout.write(`/n/n/n/n ${questions[i]}`);
    process.stdout.write("   >  ")
}

// process.stdin.on('data' , function(){

//     process.stdout.write('\n' + DataTransfer.toString().trim() + '\n');

// });

ask(0)


/// Error (Not working)