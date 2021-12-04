// Receiving HTML elements from the DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//All functions
//Function to show errors
function showError(input, message) {
    //Get the parent element to the input feild {.form-controll}
    const formControl = input.parentElement;
    //Replace the class - add error
    formControl.className = "form-controll error";
    //Get the small element for the error message
    const small = formControl.querySelector("small");
    //Override the text for small element using the input message
    small.innerText = message;
}

//Funtion to update class for success
function showSuccess(input) {
    //Get the parent element to the input feild {.form-controll}
    const formControl = input.parentElement;
    //Replace the class - add error
    formControl.className = "form-controll success";
}

//Function to check if email is valid
function isValidEmail(input) {
    // Regular Expression for email Validation
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`);
    }
}
//Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value === "") {
            showError(input, ` ${getFeildID(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Function to chek length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFeildID(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFeildID(input)} needs to be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Function to check if password & confirm password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Confirm Password is not match");
    }
}

//Function to get the id of the input fields with propper case
function getFeildID(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
//create event listner for submit button
form.addEventListener("submit", function (e) {
    //stop page from reloading on submit
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 30);
    isValidEmail(email);
    checkPasswordMatch(password, password2);
});