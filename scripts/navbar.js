document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Always start closed
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  nav.style.animation = '';

  function closeNav() {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    nav.style.animation = '';
  }

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
      nav.style.animation = 'bounceIn 0.4s';
    } else {
      nav.style.animation = '';
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeNav();
    });
  });

  document.addEventListener('click', function(e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeNav();
    }
  });
});

// Playful bounce animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounceIn {
  0% { transform: scaleY(0.7); opacity: 0.5; }
  60% { transform: scaleY(1.1); opacity: 1; }
  80% { transform: scaleY(0.95); }
  100% { transform: scaleY(1); }
}`;
document.head.appendChild(style); 