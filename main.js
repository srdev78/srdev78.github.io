/**
 * This function runs when the page is loaded and the DOM is ready 
 */
$(function () {

    ///Trigger the Go button when enter is pressed in the textbox
    $("#nameText").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#processNameBtn").click();
        }
    });;
});


/**
 * This function says hello world.
 */
function sayHello() {
    document.getElementById("initialGreetingSection").innerHTML = "You seem like you could be a cunt.  Start by introducing yourself, so we can make sure";
    var x = document.getElementById("button-section");
    x.style.display = "block";
}

/**
 * This function says hello to the person entered into the textbox.
 */
function processName() {
    document.getElementById("helloWorldSection").innerHTML = "Ah yes! " + document.getElementById("nameText").value + ". You are a proper cunt, and you know it dont you?";

    var x = document.getElementById("footer");
    x.style.display = "block";


}