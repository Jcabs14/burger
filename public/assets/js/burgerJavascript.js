//add a new burger

$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        burgerName: $("#burger").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});