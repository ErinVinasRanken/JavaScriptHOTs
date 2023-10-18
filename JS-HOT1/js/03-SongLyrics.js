document.addEventListener("DOMContentLoaded", function() {
document.getElementById("displayButton").addEventListener("click", function() {
    let numberInput = document.getElementById("numberInput").value;
    let messageElement = document.getElementById("message");

    // Try to convert the user's input to an integer
    let number = parseInt(numberInput);

    if (isNaN(number)) {
        messageElement.textContent = "Please enter a number, not a word.";
    } else if (number === 1) {
        messageElement.textContent = "One is the loneliest number that you'll ever do.";
    } else if (number === 2) {
        messageElement.textContent = "Two can be as bad as one. It's the loneliest number since the number one.";
    } else if (number === 3) {
        messageElement.textContent = "There is no three.";
    } else {
        messageElement.textContent = "You didn't enter a valid number.";
    }
});
});