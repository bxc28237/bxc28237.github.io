const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
function adjustFooterPosition() {
    const footer = document.querySelector('.site-footer');
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;

    if (bodyHeight < windowHeight) {
      footer.style.position = 'absolute';
      footer.style.bottom = '0';
      footer.style.left = '0';
      footer.style.width = '100%';
    } else {
      footer.style.position = 'static'; // normal flow
    }
  }

  window.addEventListener('load', adjustFooterPosition);
  window.addEventListener('resize', adjustFooterPosition);