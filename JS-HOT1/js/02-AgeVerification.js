document.addEventListener("DOMContentLoaded", function() {
document.getElementById("verifyButton").addEventListener("click", function() {
    let ageInput = document.getElementById("ageInput").value;
    let messageElement = document.getElementById("message");

    // Try to convert the user's input to an integer
    let age = parseInt(ageInput);

    if (isNaN(age)) {
        messageElement.textContent = "Please enter your age!";
    } else if (age < 1 || age > 200) {
        messageElement.textContent = "Age out of range!";
    } else if (age >= 21) {
        messageElement.textContent = "Welcome to the venue!";
    } else {
        messageElement.textContent = "You're not old enough!";
    }
});
});


