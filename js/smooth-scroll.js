// Get all links with hash value
const links = document.querySelectorAll('a[href^="#"]');

// Loop through each link and add an event listener to it
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Get the target element based on the hash value of the clicked link
    const target = document.querySelector(this.getAttribute('href'));

    // Get the offset value and add 50px to it
    const offset = target.offsetTop - 70;

    // Get the speed value, or set a default value of 800ms
    const speed = parseInt(this.getAttribute('data-scroll-speed')) || 800;

    // Scroll to the target element with smooth behavior, using the speed and offset values
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
      duration: speed
    });

    // Manually change the URL without creating a new history entry
    if (history.replaceState) {
      history.replaceState(null, null, window.location.pathname);
    } else {
      window.location.hash = '';
    }
  });
});