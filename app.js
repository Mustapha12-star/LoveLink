function createProfile() {

let name = prompt("Enter your name");

if (name) {
document.getElementById("result").innerHTML =
"Profile created for: " + name;
}

}

function searchFriends() {

document.getElementById("result").innerHTML =
"Searching for friends...";

}

function startChat() {

let message = prompt("Write a message");

if (message) {
document.getElementById("result").innerHTML =
"Your message: " + message;
}

}
