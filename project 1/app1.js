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
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value === "") {
            showError(input,` ${getFeildID(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
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
    checkRequired([username, email, password, password2])
});