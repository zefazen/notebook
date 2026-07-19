// ========================= NOTEBOOK ==========================
// -------------------------------------------------------------
// DROPDOWN ====================================================
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.nb-dropdown-toggle');
  const dropdownMenu = document.querySelector('.nb-dropdown-menu');
  const dropdownWrapper = document.querySelector('.nb-dropdown-wrapper');
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('nb-show');
    });
    document.addEventListener('click', (e) => {
      if (!dropdownWrapper.contains(e.target)) {
        dropdownMenu.classList.remove('nb-show');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownMenu.classList.remove('nb-show');
      }
    });
  }
  // debug
  // document.querySelector('.nb-dropdown-menu')?.classList.add('nb-show');
});
// SHUFFLE =====================================================
let lastClickTime = 0;
let toastCooldown = null;
let spamCounter = 0;

function randomNote() {
  const cards = document.querySelectorAll('.nb-card');
  if (cards.length === 0) {
    if (typeof showToast === "function") showToast("(╥﹏╥) Belum ada catatan..");
    return;
  }
  cards.forEach(card => card.classList.remove('nb-highlight'));
  const randomIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomIndex];
  randomCard.classList.add('nb-highlight');
  randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => {
    randomCard.classList.remove('nb-highlight');
  }, 4000);
  // Easter Egg
  const sekarang = Date.now();
  clearTimeout(toastCooldown);
  // spam
  if (sekarang - lastClickTime < 1500) {
    spamCounter++;
    toastCooldown = setTimeout(() => {
      if (typeof showToast === "function") {
        // ngambek
        if (spamCounter >= 3) {
          showToast("SUDAH CUKUP!");
        }
      }
      spamCounter = 0;
    }, 500);
  } else {
    spamCounter = 0;
    if (typeof showToast === "function") {
      showToast("( ˶°ㅁ°)!! Catatan acak terpilih!");
    }
  }
  lastClickTime = sekarang;
}

// SHARE =======================================================
function sharePage() {
  const shareText = "Membaca lembaran yang sengaja dibiarkan terbuka tanpa garis pembatas. ZefaZen's Notebook:";
  const shareUrl = window.location.href;
  const fullCopyText = `${shareText} ${shareUrl}`;
  navigator.clipboard.writeText(fullCopyText).then(() => {
    showToast("( ദ്ദി ˙ᗜ˙ ) Tautan berhasil disalin!");
  }).catch(() => {
    showToast("( ╹ -╹)? Gagal menyalin tautan.");
  });
}
// SCROLL ======================================================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
// TOAST =======================================================
function showToast(message) {
  const toast = document.getElementById('nb-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
// =============================================================
// -------------------------------------------------------------
// ============================ END ============================