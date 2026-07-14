(async function loadGitHubViews() {
  const viewContainer = document.getElementById('view-count');
  const apiURL = 'https://views.igorkowalczyk.dev/api/json/zefazen';
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data && typeof data.views !== 'undefined') {
      viewContainer.textContent = data.views;
    } else {
      viewContainer.textContent = '0';
    }
  } catch (error) {
    console.warn('Gagal memuat tayangan:', error);
    viewContainer.textContent = '-';
  }
})();