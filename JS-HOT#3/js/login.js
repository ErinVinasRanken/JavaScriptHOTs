"use strict"

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form submission by default.
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (email.trim() === '' || password.trim() === '') {
        // Blank fields error
        errorMessage.textContent = "You seem to have forgotten your username and password.";
        successMessage.textContent = "";
      } else if (email === 'admin@example.com' && password === 'password') {
        // Successful login
        successMessage.textContent = "Welcome back Admin!";
        errorMessage.textContent = "";
      } else {
        // Incorrect email or password error
        errorMessage.textContent = "That email and password doesn't seem to be right. Try again.";
        successMessage.textContent = "";
      }
    });
  });
  