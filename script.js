const btn = document.getElementById ("submit");// const is a vaiable that is not going to change
let name = "";
const textbox = document.getElementById ("nameinput");
const header = document.getElementById ("h1");
btn.addEventListener("click", () => {
    event.preventDefault(); // to prevent refresh page
    name = textbox.value;//sets the name value of the textbox
    header.textContent = "Welcome, " + name + "!";

});