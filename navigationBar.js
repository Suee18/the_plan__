let lastScrollTop = 0; // This will hold the last scroll position

// This event listener is for the scroll event
window.addEventListener('scroll', function() {
  // We need to get the navbar element inside the event listener
  // because it may not exist yet outside due to the asynchronous fetch call
  const navbar = document.getElementById('navbar');
  if (navbar) { // Check if navbar actually exists
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop){
      // Scrolling down
      navbar.classList.remove('visible');
    } else {
      // Scrolling up
      navbar.classList.add('visible');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }
}, false);

document.addEventListener('DOMContentLoaded', function() {
  // Function to dynamically set the correct path to navigationBar.html
  function getNavbarPath() {
      // The navbar is located at the root, adjust the path depending on the current page's depth
      const pathToRoot = window.location.pathname.includes('/registration/') ? '../' : './';
      return pathToRoot + 'navigationBar.html';
  }

  // Fetch the navbar using the dynamically set path
  fetch(getNavbarPath())
      .then(response => response.text())
      .then(data => {
          // Inject the navbar HTML into the placeholder div
          document.getElementById('navBar_call').innerHTML = data;
      })
      .catch(error => {
          console.error('Error fetching navbar:', error);
      });
});