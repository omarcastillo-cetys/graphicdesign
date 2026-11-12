function changeMessage()
{
    document.getElementById("JSdemo").innerHTML = "I change the text with this function";
}

function message2()
{
    document.getElementById("JSdemo").innerHTML = "I change the text with the second button";
}

function toggleDarkMode()
{
 document.body.classList.toggle("dark-mode");   
}

function toggleContact()
{
 document.getElementById("contact").classList.toggle("hidden");
}





/* HEADER VISIBILITY CONTROL */

let lastScrollPosition = window.scrollY; // Stores the previous scroll position
const header = document.querySelector("header"); // Selects the header
let mouseAtTop = false; // Tracks whether the mouse is near the top

/* DETECT SCROLL DIRECTION */
window.addEventListener("scroll", function() {

    let currentScrollPosition = window.scrollY; // Gets the current scroll position

    if (currentScrollPosition <= 0 || mouseAtTop) {
        header.classList.remove("header-hidden"); // Shows the header
    }
    else if (Math.abs(currentScrollPosition - lastScrollPosition) >= 5) {

        if (currentScrollPosition > lastScrollPosition) {
            header.classList.add("header-hidden"); // Hides when scrolling down
        }
        else {
            header.classList.remove("header-hidden"); // Shows when scrolling up
        }

        lastScrollPosition = currentScrollPosition; // Saves the scroll position
    }

    if (currentScrollPosition <= 0) {
        lastScrollPosition = 0; // Resets the position at the top
    }

});

/* SHOW HEADER WHEN MOUSE REACHES TOP */
document.addEventListener("mousemove", function(event) {

    mouseAtTop = event.clientY <= 30; // Detects mouse within top 30 pixels

    if (mouseAtTop) {
        header.classList.remove("header-hidden"); // Shows the header
    }

});

