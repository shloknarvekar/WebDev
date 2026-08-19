
let maxNum = parseInt(prompt("Welcome! Enter your max number:"));
let val = Math.floor(Math.random() * maxNum) + 1;
let count = 1;
let guess = parseInt(prompt("Guess the number: "));
while (guess !== val) {
    if (guess < val) guess = parseInt(prompt("Guess is lower! Try again"));
    else if (guess > val) guess = parseInt(prompt("Guess is higher! Try again"));
    count++;
}
console.log(`It took you ${count} guesses`);
