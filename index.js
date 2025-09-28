// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Elements to observe
  const revealTargets = document.querySelectorAll('header, section, footer, .card');

  // IntersectionObserver options: reveal when element enters viewport
  const options = {
    root: null,
    rootMargin: '0px 0px -120px 0px', // trigger slightly before element fully enters
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // reveal once
      }
    });
  }, options);

  revealTargets.forEach(el => observer.observe(el));

  function comingSoon() {
  const notif = document.getElementById('notification');
  notif.textContent = "Coming Soon!";
  notif.classList.add('show');

  // Hide after 2 seconds
  setTimeout(() => {
    notif.classList.remove('show');
  }, 2000);
}


  // Smooth-scrolling anchors (works even if browser ignores CSS scroll-behavior)
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
