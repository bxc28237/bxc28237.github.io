document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger-btn');
  
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  