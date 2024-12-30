export function initNavigation() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn?.contains(e.target) && !mobileMenu?.contains(e.target)) {
      mobileMenu?.classList.add('hidden');
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        mobileMenu?.classList.add('hidden');
      }
    });
  });
}