//generate random password
function generate(){

//set password lenght/complexity
let complexity = document.getElementById("slider").nodeValue;

//possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

let password = "";

//create for loop to choose password characters
for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)))
}

//add password to textbox/display area
document.getElementById("display").value = password;

}