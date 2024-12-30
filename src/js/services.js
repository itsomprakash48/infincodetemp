const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>`,
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions for modern business needs'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>`,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>`,
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning'
  }
];

export function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;

  servicesGrid.innerHTML = services.map(service => `
    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
      <div class="mb-4 text-blue-600">
        ${service.icon}
      </div>
      <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
      <p class="text-gray-600">${service.description}</p>
    </div>
  `).join('');
}