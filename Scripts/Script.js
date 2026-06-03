$(document).ready(function () {
    // Task 1: When the page loads, display a popup alert to welcome the user to the amusement park website
    alert("Welcome to FunLand Amusement Park!");
    
    //Task 10: When the page loads, change the font type and size of all paragraph elements using jQuery. Do not use an ID or class to select the elements.
    $("p").css({
        "font-family": "Verdana",
        "font-size": "18px"
    });
    
    changeGamesHeadingColour();
     updateRideInfo();
});

$(".ride-card").click(function () {
    //Task 2: When the user clicks on any ride card, display the background colour of that specific card in an alert. 
    let colour = $(this).css("background-color");
    alert("Background colour: " + colour);
    
    //Task 7: When a user clicks on any ride card, apply a short animation effect to that specific card. 
    $(this).slideUp().slideDown();
});

// Task 3: Show/Hide the Rides section when the 'Toggle Rides' button is clicked
$("#toggleRides").click(function () {
    $("#rides").toggle();
});

//Task 4: When the user double clicks on any game in the list, add another game to the list, with the same formatting. 
$(".game").dblclick(function () {
    $("#games ul").append("<li class='game'>New Game</li>");
});

// Task 5: When the 'Highlight Attractions' button is clicked, apply or remove the following formatting to all the ride cards
// formatting: 3px solid #ff6f61 border all around. 
//Each click should toggle the formatting on and off 
$("#highlight").click(function () {
    $(".ride-card").toggleClass("highlightBorder");
});


    //Task 6: The 'Fade Out Page' button should make the entire page fade out and then fade back in automatically
    $("#fadeOut").click(function () {
        $("body").fadeOut().fadeIn();
    });
    

//Task 8: When the user hovers over a ride card, temporarily change its background colour. When the mouse leaves, return it to the original colour
$(".ride-card").mouseover(function () {
     $(this).data("original-color", $(this).css("background-color"));
    $(this).css("background-color", "yellow");
});

$(".ride-card").mouseout(function () {
    $(this).css("background-color", $(this).data("original-color"));
});

//Task 9: Clicking the 'BUY Tickets' heading, should replace the heading text with a new message e.g. "Tickets sold out!"
$("#tickets h2").click(function () {
    $(this).html("Tickets sold out!");
});


//Task 11: Create your own new function + add a description of what the function does here
// This function changes the colour of the "Carnival Games" heading to make it stand out
function changeGamesHeadingColour() {
    $("#games h2").css("color", "green");
}
//Task 12: Create your own new function + add a description of what the function does here
// This function updates all ride card descriptions and changes their appearance
function updateRideInfo() {
    $(".ride-card p").html("Enjoy this amazing attraction at FunLand!");
    $(".ride-card").css({
        "border-radius": "15px",
        "background-color": "#dff6ff"
    });
}
//Challenge 1: Write a function that adds logical and appropriate functionality to the 'Shuffle Games' button
$("#shuffleGames").click(function () {
    let games = $(".game").toArray();

    games.sort(function () {
        return 0.5 - Math.random();
    });

    $("#games ul").empty();

    $(games).each(function () {
        $("#games ul").append(this);
    });
});


//Challenge 2: Write a function that adds logical and appropriate functionality to the 'Calculate Total' button
$("#calculate").click(function () {
    let price = Number($("#ticketType").val());
    let quantity = Number($("#quantity").val());

    let total = price * quantity;

    $("#total").html("Total: R" + total);
});