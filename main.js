/**
 * This function runs when the page is loaded and the DOM is ready 
 */
$(function () {
    //Attach keyup event hanlder so the get results button is triggered when enter is pressed in the textbox
    $("#nameTextBox").keyup(function (event) {
        hideResults();
        if (event.keyCode === 13) {
            $("#getResultsBtn").click();
        }
        
    });;
});

/**
 * This function starts the process of checking if someone is a cunt 
 */
function startBtnClick() {

    //test comment
    showInitialSection();
    clearTextBox();
    hideResults();
    focusTextBox();
}

/**
 * This function says hello to the person entered into the textbox.
 */
function getResults() {

    hideResults();
    //get the name textbox
    var enteredName = document.getElementById("nameTextBox").value;

    //validate the textbox has data in
     if (enteredName === "") {
         //displayError();
         return false;
    }

    //if we got here then process the results and display them
    populateUnhideResults();
}

/**
 * Clears the results section from previous executions
 */
function hideResults() {
    var z = document.getElementById("resultsSection");
    z.style.display = "none";
    var a = document.getElementById("footer");
    a.style.display = "none";
}

/**
 * shows the initial section so the user can enter their name
 */
function showInitialSection() {
    document.getElementById("initialSection").innerHTML = "You seem like you could be a cunt. <br><br> Begin by introducing yourself, so we can make sure you are qualified to be a cunt.";
    var x = document.getElementById("button-section");
    x.style.display = "block";
}

/**
 * Moves the cursor to the name textbox so the user can start typing stright away
 */
function focusTextBox() {
    document.getElementById("nameTextBox").focus();
}

/**
 * Populates the results section, and unhides it
 */
function populateUnhideResults() {

    var enteredName = document.getElementById("nameTextBox").value;

    //get the results section
    var userMessage = "Ah yes!  I have heard about you <b> " + enteredName + "</b>.<br><br> You are a proper cunt, and you know it dont you?"; 
    document.getElementById("resultsSection").innerHTML = userMessage;
    var x = document.getElementById("footer");
    x.style.display = "block";
    var y = document.getElementById("resultsSection");
    y.style.display = "block";
}

/**
 * Clears the texbox from previous executions
 */
function clearTextBox(){
     var y = document.getElementById("nameTextBox");
     y.value = "";
}
