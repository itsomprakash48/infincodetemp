import { initNavigation } from './js/navigation.js';
import { renderServices } from './js/services.js';
import { renderStats } from './js/about.js';
import { initFooter } from './js/footer.js';

// Load HTML components
async function loadComponent(id, path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${path}:`, error);
  }
}

// Initialize all components
async function initApp() {
  await Promise.all([
    loadComponent('header', '/src/components/header.html'),
    loadComponent('hero', '/src/components/hero.html'),
    loadComponent('services', '/src/components/services.html'),
    loadComponent('about', '/src/components/about.html'),
    loadComponent('footer', '/src/components/footer.html')
  ]);

  // Initialize functionality
  initNavigation();
  renderServices();
  renderStats();
  initFooter();
}

// Start the application
document.addEventListener('DOMContentLoaded', initApp);