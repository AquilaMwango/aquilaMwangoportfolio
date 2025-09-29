document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('header, section, footer, .card');
  const observerOptions = { root: null, rootMargin: '0px 0px -120px 0px', threshold: 0 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  revealTargets.forEach(el => observer.observe(el));

  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const projectBoxes = document.querySelectorAll('.project-box');
  projectBoxes.forEach(box => {
    const url = box.dataset.url;
    box.addEventListener('click', () => {
      if (url) openProject(url);
      else showNotification("Coming Soon!");
    });
  });
});

function showNotification(message = "Coming Soon!") {
  const notif = document.getElementById('notification');
  notif.textContent = message;
  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 2000);
}

function openProject(url) {
  window.location.href = url;
}
