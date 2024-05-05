
document.addEventListener('DOMContentLoaded', function() {
    // Function to dynamically set the correct path to navigationBar.html
    function getNavbarPath() {
        return  'ticket.html';
    }
  
    fetch(getNavbarPath())
        .then(response => response.text())
        .then(data => {
            document.getElementById('ticketHolder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
  });