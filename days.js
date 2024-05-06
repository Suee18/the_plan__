document.addEventListener('DOMContentLoaded', function () {
    var card = document.querySelector('.card');
    card.addEventListener('click', function() {
        // Toggle the background color between two colors
        if (this.style.backgroundColor === 'rgb(7, 19, 53)') {
            this.style.backgroundColor = 'rgb(7, 19, 53) ';
        } else {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var scrollToBegin = document.getElementById('btn1');
    var beginHere = document.getElementById('scrolled1');

    scrollToBegin.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the radio from being selected if not desired
        beginHere.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
 



