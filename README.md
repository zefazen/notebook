<!-- Sumber Daya -->
<link rel="stylesheet" href="./assets/css/notebook.css">
<link rel="stylesheet" href="./assets/css/iconbook.css">

<!-- Peralatan -->
<div class="nb-quick-actions">
  <div class="nb-action-pill nb-visitor-pill">
    <img src="https://views.igorkowalczyk.dev/api/badge/zefazen?style=flat&color=fff&labelColor=fff" alt="Views" class="nb-badge-img" />
  </div>
  <a href="#tentang-penulis" class="nb-action-pill nb-action-btn">Tentang Penulis</a>
  <button onclick="randomNote()" class="nb-action-pill nb-action-btn" aria-label="Baca tulisan acak">Baca Acak</button>
  <button onclick="sharePage()" class="nb-action-pill nb-action-btn" aria-label="Bagikan halaman ini">Bagikan</button>
</div>

<!-- Ringkasan -->
<p class="nb-desc">Jejak langkah pikiran yang sengaja dibiarkan tak beraturan. Sebuah perjalanan yang membawamu menyelami makna dalam satu waktu lalu merayakan hal-hal tak masuk akal di lembar berikutnya.</p>

<!-- Catatan -->
<div class="nb-row">
  <a href="./serat-lakon-anoman" class="nb-card">
    <div>
      <div class="nb-header">
        <i class="ph--note"></i>
        <span class="nb-date">Jum, 6 Feb 2026</span>
      </div>
      <h3 class="nb-title">Serat Lakon Anoman</h3>
      <p class="nb-summary">Dari gelap jadi terang. Sang perkasa dari legenda.</p>
    </div>
    <div class="nb-tags">
      <span class="nb-tag">#wayang</span><span class="nb-tag">#dongeng</span>
      <span class="nb-tag">#ceritarakyat</span>
    </div>
  </a>
  <a href="./prolog-dari-sebuah-akhir" class="nb-card">
    <div>
      <div class="nb-header">
        <i class="ph--note"></i>
        <span class="nb-date">Min, 29 Jun 2025</span>
      </div>
      <h3 class="nb-title">Prolog dari Sebuah Akhir</h3>
      <p class="nb-summary">Sebuah puisi untukmu, penuh dengan romansa.</p>
    </div>
    <div class="nb-tags">
      <span class="nb-tag">#romansa</span><span class="nb-tag">#puisipagi</span>
      <span class="nb-tag">#nasihat</span>
    </div>
  </a>
</div>
<div class="nb-row">
  <a href="./draft/ramadhan-penuh-berkah" class="nb-card">
    <div>
      <div class="nb-header">
        <i class="ph--note"></i>
        <span class="nb-date">Kam, 14 Apr 2022</span>
      </div>
      <h3 class="nb-title">Ramadhan Penuh Berkah</h3>
      <p class="nb-summary"></p>
    </div>
    <div class="nb-tags">
      <span class="nb-tag">#ramadhan</span><span class="nb-tag">#kajian</span>
      <span class="nb-tag">#kuliahtujuhmenit</span>
    </div>
  </a>
</div>

<!-- Navigasi -->
<div class="nb-scroll-btn">
  <button onclick="scrollToTop()" class="nb-scroll" aria-label="Scroll ke atas">
    <i class="ph--caret-up"></i>
  </button>
  <button onclick="scrollToBottom()" class="nb-scroll" aria-label="Scroll ke bawah">
    <i class="ph--caret-down"></i>
  </button>
</div>

<!-- Tentang Penulis -->
<footer class="nb-footer-container" id="tentang-penulis">
  <div class="nb-author-card">
    <div class="nb-header">
      <span class="nb-author-label">Tentang Penulis</span>
    </div>
    <div class="nb-author-profile">
      <img src="./assets/img/profile/IMG_20240516_080616.JPG" alt="ZefaZen" class="nb-author-avatar" />
      <div class="nb-author-info">
        <h3 class="nb-author-name">ZefaZen</h3>
        <div class="nb-author-socials">
          <a href="https://zefazen.github.io" target="_blank" class="nb-social-btn" aria-label="Website">
            <i class="ph--website"></i>
          </a>
          <a href="https://instagram.com/zzefazen" target="_blank" class="nb-social-btn" aria-label="Instagram">
            <i class="ph--instagram"></i>
          </a>
          <a href="" target="_blank" class="nb-social-btn" aria-label="Telegram">
            <i class="ph--telegram"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="nb-author-bio">
      "Sering kali ia menenggelamkan diri dalam lamunan, bukan untuk melarikan diri, melainkan memungut kepingan ide yang berserakan. Baginya, batas antara realitas dan imajinasi hanyalah garis tipis yang dengan senang hati ia lewati untuk meracik logika, sejarah, hingga ironi menjadi sebuah rekam jejak yang abadi."
    </p>
    <hr class="nb-divider" />
    <div class="nb-footer-note">
      Sebagaimana riuhnya isi kepala, catatan ini tak pernah luput dari salah dan lupa. Saluran komunikasi selalu terbuka bagi siapa pun yang ingin meluruskan fakta atau memberi masukan
    </div>
  </div>
</footer>

<!-- Notifikasi -->
<div id="nb-toast" class="nb-toast"></div>

<!-- Sumber Daya -->
<script src="./assets/js/notebook.js"></script>