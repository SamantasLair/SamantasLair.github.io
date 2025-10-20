// --- Variabel Global & Elemen ---
let allPackages = [];
let currentPage = 1;
const itemsPerPage = 12; // 4x3 grid
let totalPages = 1;

// Elemen Halaman Utama
const paketListContainer = document.getElementById('paket-list');
const paginationControls = document.getElementById('pagination-controls');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Elemen Skor
const skorGlobalText = document.getElementById('skor-global-text');
const resetSkorBtn = document.getElementById('reset-skor-btn');

// Elemen Recommended Baru
const recommendedSection = document.getElementById('recommended-section');
const recommendedList = document.getElementById('recommended-list');


// --- Event Listener Utama ---
document.addEventListener('DOMContentLoaded', () => {
    
    loadGlobalScore();
    resetSkorBtn.addEventListener('click', resetGlobalScore);

    if (typeof quizPackages === 'undefined' || quizPackages.length === 0) {
        paketListContainer.innerHTML = '<p class="pesan-selesai">Belum ada modul pembelajaran yang tersedia.</p>';
        recommendedSection.classList.add('hidden');
        paginationControls.classList.add('hidden');
        return;
    }

    // Ambil data dari localStorage
    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
    
    // 1. Logika untuk "Recommended for You"
    const incompletePackages = quizPackages.filter(paket => !completed.includes(paket.id));
    
    recommendedList.innerHTML = ''; // Kosongkan
    if (incompletePackages.length > 0) {
        incompletePackages.forEach(paket => {
            const card = createPackageCard(paket, false); // Buat kartu (belum selesai)
            recommendedList.appendChild(card);
        });
    } else {
        // Tampilkan pesan "Congrats"
        recommendedSection.innerHTML = '<div class="congrats-message">🎉 Selamat! Anda telah menyelesaikan semua modul yang direkomendasikan.</div>';
    }

    // 2. Logika untuk Grid "Semua Modul" (dengan pagination)
    allPackages = quizPackages; // Grid ini berisi SEMUA paket
    totalPages = Math.ceil(allPackages.length / itemsPerPage);
    
    prevBtn.addEventListener('click', goToPrevPage);
    nextBtn.addEventListener('click', goToNextPage);

    displayPackagesForPage();
    updatePaginationControls();
});


// --- Fungsi Helper Pembuat Kartu ---
function createPackageCard(paket, isCompleted) {
    const card = document.createElement('div');
    card.className = 'paket-card';
    card.innerHTML = `
        <h3>${paket.title}</h3>
        <p>${paket.description}</p>
    `;
    
    if (isCompleted) {
        card.classList.add('selesai');
    } else {
        // Hanya tambahkan event click jika BELUM selesai
        card.addEventListener('click', () => selectPaket(paket.id));
    }
    
    return card;
}


// --- Fungsi Logika Pagination (untuk Grid Utama) ---
function displayPackagesForPage() {
    paketListContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const packagesToShow = allPackages.slice(startIndex, endIndex);

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');

    packagesToShow.forEach(paket => {
        const isCompleted = completed.includes(paket.id);
        const card = createPackageCard(paket, isCompleted);
        paketListContainer.appendChild(card);
    });
}

function updatePaginationControls() {
    pageInfo.innerText = `Halaman ${currentPage} / ${totalPages}`;
    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage === totalPages);

    if (totalPages <= 1) {
        paginationControls.classList.add('hidden');
    } else {
        paginationControls.classList.remove('hidden');
    }
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPackagesForPage();
        updatePaginationControls();
    }
}

function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayPackagesForPage();
        updatePaginationControls();
    }
}


// --- Fungsi Skor & Navigasi ---
function selectPaket(paketId) {
    sessionStorage.setItem('selectedQuizId', paketId);
    window.location.href = 'quiz.html';
}

function loadGlobalScore() {
    const totalScore = localStorage.getItem('pancasilaGameScore') || '0';
    skorGlobalText.innerText = totalScore;
}

function resetGlobalScore() {
    localStorage.removeItem('pancasilaGameScore');
    localStorage.removeItem('pancasilaCompletedQuizzes');
    window.location.reload(); // Refresh halaman untuk memuat ulang kedua daftar
}