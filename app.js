console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let numToGuess = 5;
let userNum = prompt("Guess a Number Between 1 and 10")

if (numToGuess > userNum) {
    alert("Too low")
} else if (numToGuess < userNum) {
    alert("Too high")
} else {
    alert("Congrats!");
}

// Exercise 2
let userBirthMonth = prompt("What month were you born? Type in the abbreviated month (ex: January -> Jan)");

switch (userBirthMonth) {
    case "Dec":
    case "Jan":
    case "Feb":
    case "Mar":
        alert("You were born in winter");
        break;
    case "Apr":
    case "May":
    case "Jun":
        alert("You were born in spring");
        break;
    case "Jul":
    case "Aug":
        alert("You were born in summer");
        break;
    case "Sep":
    case "Oct":
    case "Nov":
        alert("You were born in fall");
        break;
    default:
        alert("You gave an incorrect month format.");
}
