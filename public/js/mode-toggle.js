// Ambil elemen yang dibutuhkan
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const sidebar = document.querySelector('.sidebar');
const navbar = document.querySelector('.navbar');
const modeIcon = document.getElementById('modeIcon');

// Periksa jika ada tema yang disimpan sebelumnya di localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  sidebar.classList.add('dark-mode');
  navbar.classList.add('navbar-dark-mode');
  modeIcon.classList.remove('fa-moon');
  modeIcon.classList.add('fa-sun'); // Ganti ikon ke matahari untuk mode terang
} else {
  body.classList.add('light-mode');
  sidebar.classList.add('light-mode');
  navbar.classList.add('navbar-light-mode');
  modeIcon.classList.remove('fa-sun');
  modeIcon.classList.add('fa-moon'); // Ganti ikon ke bulan untuk mode gelap
}

// Event listener untuk mengubah mode
modeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    // Ganti ke mode terang
    body.classList.remove('dark-mode');
    sidebar.classList.remove('dark-mode');
    navbar.classList.remove('navbar-dark-mode');
    body.classList.add('light-mode');
    sidebar.classList.add('light-mode');
    navbar.classList.add('navbar-light-mode');
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light'); // Simpan mode terang ke localStorage
  } else {
    // Ganti ke mode gelap
    body.classList.remove('light-mode');
    sidebar.classList.remove('light-mode');
    navbar.classList.remove('navbar-light-mode');
    body.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    navbar.classList.add('navbar-dark-mode');
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark'); // Simpan mode gelap ke localStorage
  }
});
