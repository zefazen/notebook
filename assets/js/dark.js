// LOGIKA MODE DARK
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; 
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('nb-theme', newTheme);
  updateThemeIcon(newTheme);
}
function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    icon.className = 'ph--sun';
  } else {
    icon.className = 'ph--moon';
  }
}
(function initTheme() {
  const savedTheme = localStorage.getItem('nb-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
})();