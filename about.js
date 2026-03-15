/* 
Request 5 - FAQ Accordion
*/

function Accordion() {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');

            // Close every item first — only one can be open at a time
            allItems.forEach(function(otherItem) {
                otherItem.classList.remove('open');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            //If open, close when clicked, else open when clicked
            if (isOpen) {
                item.classList.remove('open');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

Accordion();