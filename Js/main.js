// =============================================
//  main.js — Priyanshu Priyadarshi Portfolio
// =============================================


// ── Skills Tab Switcher ──
// Called from onclick in HTML buttons
function showSkill(id, btn) {
  // Hide all panels
  document.querySelectorAll('.skill-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show selected panel and activate clicked tab
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}


// ── Scroll Fade-in Animation ──
// Watches .fade-up elements and reveals them when they enter the viewport
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


// ── Active Nav Link Highlight ──
// Highlights the nav link for whichever section is currently in view
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--text-1)';
      link.style.fontWeight = '500';
    } else {
      link.style.color = '';
      link.style.fontWeight = '';
    }
  });
});


// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
