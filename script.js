const btn = document.getElementById ("submit");
let name = "";
const textbox = document.getElementById ("nameinput");
const header = document.getElementById ("h1");
btn.addEventListener("click", () => {
    event.preventDefault(); // to prevent refresh page
    name = textbox.value;//sets the name value of the textbox
    header.textContent = "Welcome, " + name + "!";

});