/*
Request 1 - Hamburger menu
*/

// Grab the hamburger button and the nav list
const hamburger = document.getElementById('hamburger');
const navList   = document.getElementById('nav-links');

//Toggle the menu open and closed 
function toggleMenu() {
    navList.classList.toggle('open');
}

// Close the menu when any nav link is clicked
function setupLinkClose() {
    navList.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('open');
        });
    });
}

hamburger.addEventListener('click', toggleMenu);
setupLinkClose();