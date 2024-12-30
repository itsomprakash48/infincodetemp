const stats = [
  { value: '500+', label: 'Global Clients' },
  { value: '5000+', label: 'Team Members' },
  { value: '40+', label: 'Countries' }
];

export function renderStats() {
  const statsGrid = document.getElementById('stats-grid');
  if (!statsGrid) return;

  statsGrid.innerHTML = stats.map(stat => `
    <div class="text-center p-6 bg-blue-50 rounded-xl">
      <div class="text-4xl font-bold text-blue-600 mb-2">${stat.value}</div>
      <div class="text-gray-600">${stat.label}</div>
    </div>
  `).join('');
}