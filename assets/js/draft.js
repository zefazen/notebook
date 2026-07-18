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
  if (typeof showToast === "function") {
    showToast("( ˶°ㅁ°)!! Catatan acak terpilih!");
  }
  setTimeout(() => {
    randomCard.classList.remove('nb-highlight');
  }, 4000);
}