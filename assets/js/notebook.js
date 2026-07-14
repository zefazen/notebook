// AKSI CEPAT

// 1. Baca Acak
function randomNote() {
  const cards = document.querySelectorAll('.nb-card');
  if (cards.length === 0) {
    showToast("Belum ada catatan yang tersedia.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomIndex];
  const targetUrl = randomCard.getAttribute('href');
  if (targetUrl && targetUrl !== '#' && targetUrl !== '') {
    window.location.href = targetUrl;
  } else {
    randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const originalShadow = randomCard.style.boxShadow;
    const originalBorder = randomCard.style.borderColor;
    randomCard.style.transition = 'box-shadow 0.5s ease, border-color 0.5s ease';
    randomCard.style.boxShadow = '0 0 0 4px rgba(0, 102, 255, 0.3), 0 8px 20px rgba(0, 40, 100, 0.1)';
    randomCard.style.borderColor = '#0066ff';
    setTimeout(() => {
      randomCard.style.boxShadow = originalShadow;
      randomCard.style.borderColor = originalBorder;
    }, 2500);
  }
}

// 2. Bagikan Halaman Ini
function sharePage() {
  const shareText = "✨ Jelajahi lembaran catatan digital ZefaZen di:";
  const shareUrl = window.location.href;
  const fullCopyText = `${shareText} ${shareUrl}`;
  
  navigator.clipboard.writeText(fullCopyText).then(() => {
    showToast("Tautan berhasil disalin!");
  }).catch(() => {
    showToast("Gagal menyalin tautan.");
  });
}

// NAVIGASI
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// NOTIFIKASI
function showToast(message) {
  const toast = document.getElementById('nb-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
