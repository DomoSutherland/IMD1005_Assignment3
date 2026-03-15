/*--------
Request 3 - Back to top button
--------*/

const backToTopBtn = document.getElementById("back-to-top");

// Show or hide the button based on scroll position //
function handleScroll() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Scroll to top of page //
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.addEventListener('scroll', handleScroll);
backToTopBtn.addEventListener('click', scrollToTop);


/*--------
Request 7 - Fetch API Daily Inspiration Quotes
--------*/
async function fetchQuote() {

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteText.textContent = 'Loading today\'s inspiration...';
    quoteAuthor.textContent = '';

    try {
        const response = await fetch('https://randominspirationalquotes.onrender.com');

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();

        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;

    } catch (error) {
        quoteText.textContent = '"Fill your paper with the breathings of your heart."';
        quoteAuthor.textContent = '— William Wordsworth';
    }
}

const quoteSection = document.getElementById('quote-text');
if (quoteSection) {
    fetchQuote();
}