function showAlert() {
    alert("Welcome to our Tract Cybernetics!");
  }

function validateForm() {
    var name = document.forms["registerForm"]["name"].value;
    var email = document.forms["registerForm"]["email"].value;
    var password = document.forms["registerForm"]["password"].value;
    if (name == "") {
    alert("Name must be filled out");
    return false;
    }
    if (email == "") {
    alert("Email must be filled out");
    return false;
    }
    if (password == "") {
    alert("Password must be filled out");
    return false;
    }
    }
    function validateLogin() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (email == "") {
    alert("Email must be filled out");
    return false;
}
    if (password == "") {
    alert("Password must be filled out");
    return false;
    }
    }

// Path: index.html
