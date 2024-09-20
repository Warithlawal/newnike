// Get DOM elements for navigation
const navMenu = document.getElementById('nav_menu'),
    navOpen = document.getElementById('nav_open'),
    navClose = document.getElementById('nav_close'),
    overlay = document.getElementById('overlay'), // Assuming overlay is defined in your HTML
    body = document.body, // To control body scrolling
    navLinks = navMenu.querySelectorAll('a'); // Select all the links inside the nav menu

// Function to open the menu and handle overlay and scroll
function openmenu() {
    navMenu.style.right = "0"; // Show the menu
    overlay.style.display = "block"; // Show overlay
    body.classList.add('no-scroll'); // Prevent scrolling
}

// Function to close the menu and handle overlay and scroll
function closemenu() {
    navMenu.style.right = "-100%"; // Hide the menu
    overlay.style.display = "none"; // Hide overlay
    body.classList.remove('no-scroll'); // Restore scrolling
}

// Add event listeners for opening and closing the menu
if (navOpen) {
    navOpen.addEventListener('click', openmenu);
}

if (navClose) {
    navClose.addEventListener('click', closemenu);
}

// Close menu when overlay is clicked
if (overlay) {
    overlay.addEventListener('click', closemenu);
}

// Close menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closemenu);
});