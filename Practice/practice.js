// Exercise 1
let numToGuess = 9;
let userNum = prompt("Guess a number between 1 and 10")

if (numToGuess > userNum)
    alert("Too low")
else if (numToGuess < userNum)
    alert("Too high")
else {
    alert("Congrats!")
}

// Exercise 2
let userBirthMonth = prompt("What month were you born in? Type in the abbreviated month (ex: January -> Jan)");

switch (userBirthMonth) {
    case "Dec":
    case "Jan":
    case "Feb":
    case "Mar":
        alert("You were born in winter!");
        break;
    case "Apr":
    case "May":
    case "Jun":
        alert("You were born in spring!");
        break;
    case "Jul":
    case "Aug":
        alert("You were born in summer!");
        break;
    case "Sep":
    case "Oct":
    case "Nov":
        alert("You were born in fall!"); 
    default:
        alert("You gave an incorrect month format!");
}