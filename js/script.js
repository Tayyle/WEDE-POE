// Contact Form Validation
function validateForm() {

    //Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    //Check if name is empty
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    //Check if email is empty
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    //Check if message is empty
    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    //Show success message
    alert("Thank you for contacting Patty Palace!");
    return true;
}
// Menu Search Bar

// Find search box
var searchBar = document.getElementById("search");

//the search bar exists
if (searchBar) {

    // Run search when user types
    searchBar.addEventListener("keyup", function () {

        var searchText = searchBar.value.toLowerCase();

        // Find all burger items
        var burgers = document.querySelectorAll(".item");

        burgers.forEach(function (burger) {

            var burgerName =
                burger.querySelector("h3").textContent.toLowerCase();

            //Show matching burgers
            if (burgerName.includes(searchText)) {
                burger.style.display = "block";
            }
            //Hide non-matching burgers
            else {
                burger.style.display = "none";
            }
        });
    });
}
