document.querySelector("#show-booking").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active2");
    document.querySelector(".background-popup").classList.add("active1");
});
document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active2");
    document.querySelector(".background-popup").classList.remove("active1");
});

// document.querySelector(".form-element button").addEventListener("click", function(){
//     document.querySelector(".popup").classList.remove("active2");

//     document.querySelector(".popup-alert").classList.add("active3");
// });
// document.querySelector(".popup-alert .close-btn").addEventListener("click", function(){
//     document.querySelector(".popup-alert").classList.remove("active3");
//     document.querySelector(".background-popup").classList.remove("active1");
// });

var username = document.querySelector("#name");
var useremail = document.querySelector("#email");
var userphone = document.querySelector("#phone");
var bookingfor = document.querySelector("#bookingfor");
var userdate = document.querySelector("#bookingdate");
var userform = document.querySelector('form');
var usersubmit = document.querySelector('button');

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add("error");
    small.innerText = message;
}
function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    input.parentElement.classList.remove("error");
    small.innerText = '';
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if (!input.value){
            isEmptyError = true;
            showError(input, 'Khong duoc de trong');
        } else{
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmail(input){
    const regexEmail = /^\w+@[a-zA-Z]{3,}\.com$/i;
    input.value = input.value.trim();

    if (regexEmail.test(input.value)){
        showSuccess(input);
    } else{
        showError(input, 'Email khong hop le');
    }

    return regexEmail.test(input.value);
}

function checkPhoneNumber(input){
    const regexPhoneNumber = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    input.value = input.value.trim();

    if (regexPhoneNumber.test(input.value)){
        showSuccess(input);
    } else{
        showError(input, 'SĐT khong hop le');
    }

    return regexPhoneNumber.test(input.value);
}

function bookingdate(){
    let a = document.getElementById("bookingdate").value;
    document.getElementById("res").innerHTML = 'Hẹn gặp lại quý khách vào ngày ' + a;
}

usersubmit.addEventListener('click', function(e){
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, useremail, userphone, bookingfor, userdate]);
    let isEmailError = checkEmail(useremail);
    let isPhoneError = checkPhoneNumber(userphone);

    if (isEmptyError || !isEmailError || !isPhoneError)
    {
           
    } else{
            bookingdate();
            document.querySelector(".popup").classList.remove("active2");
            document.querySelector(".popup-alert").classList.add("active3");
        document.querySelector(".popup-alert .close-btn").addEventListener("click", function(){
            document.querySelector(".popup-alert").classList.remove("active3");
            document.querySelector(".background-popup").classList.remove("active1");
        });
    }
});
