const go_up_button = document.querySelector("#go-up-button"); // obtain the button

go_up_button.addEventListener("click", function () { // if press the button
    window.scrollTo(0, 0); // go to the top of the page
});