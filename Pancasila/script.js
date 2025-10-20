// Variabel global untuk pagination
let allPackages = [];
let currentPage = 1;
const itemsPerPage = 12; // 4 kolom x 3 baris
let totalPages = 1;

// Ambil elemen dari HTML
const paketListContainer = document.getElementById('paket-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');
const paginationControls = document.getElementById('pagination-controls');


document.addEventListener('DOMContentLoaded', () => {
    // Memeriksa apakah variabel quizPackages dari 'semua-paket.js' sudah ada
    if (typeof quizPackages !== 'undefined' && quizPackages.length > 0) {
        allPackages = quizPackages; // Salin data ke variabel global
        
        // Hitung total halaman
        totalPages = Math.ceil(allPackages.length / itemsPerPage);

        // Tambah event listener ke tombol
        prevBtn.addEventListener('click', goToPrevPage);
        nextBtn.addEventListener('click', goToNextPage);

        // Tampilkan halaman pertama
        displayPackagesForPage();
        updatePaginationControls();

    } else {
        // Jika tidak ada paket soal
        paketListContainer.innerHTML = '<p>Belum ada paket soal yang tersedia.</p>';
        paginationControls.classList.add('hidden'); // Sembunyikan navigasi
    }
});

function displayPackagesForPage() {
    // Kosongkan kontainer dulu
    paketListContainer.innerHTML = '';

    // Hitung paket mana yang harus ditampilkan
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const packagesToShow = allPackages.slice(startIndex, endIndex);

    // Membuat kartu untuk setiap paket di halaman ini
    packagesToShow.forEach(paket => {
        const card = document.createElement('div');
        card.className = 'paket-card';
        card.innerHTML = `
            <h3>${paket.title}</h3>
            <p>${paket.description}</p>
        `;
        // Menambahkan event click untuk memilih paket berdasarkan ID-nya
        card.addEventListener('click', () => selectPaket(paket.id));
        paketListContainer.appendChild(card);
    });
}

function updatePaginationControls() {
    // Update teks info halaman
    pageInfo.innerText = `Halaman ${currentPage} / ${totalPages}`;

    // Aktifkan/nonaktifkan tombol
    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage === totalPages);

    // Sembunyikan navigasi jika hanya 1 halaman
    if (totalPages <= 1) {
        paginationControls.classList.add('hidden');
    } else {
        paginationControls.classList.remove('hidden');
    }
}

// Fungsi untuk tombol "Sebelumnya"
function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPackagesForPage();
        updatePaginationControls();
    }
}

// Fungsi untuk tombol "Selanjutnya"
function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayPackagesForPage();
        updatePaginationControls();
    }
}

// Fungsi ini tidak berubah
function selectPaket(paketId) {
    // Menyimpan ID paket yang dipilih ke sessionStorage
    sessionStorage.setItem('selectedQuizId', paketId);
    // Pindah ke halaman kuis
    window.location.href = 'quiz.html';
}