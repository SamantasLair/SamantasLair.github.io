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
    resetSkorBtn.addEventListener('click', confirmResetGlobalScore); // Gunakan konfirmasi

    if (typeof quizPackages === 'undefined' || quizPackages.length === 0) {
        paketListContainer.innerHTML = '<div class="col-12"><p class="text-center text-gray-500 my-5">Belum ada modul pembelajaran yang tersedia.</p></div>';
        recommendedSection.classList.add('d-none');
        paginationControls.classList.add('d-none');
        return;
    }

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
    
    setupRecommendedCarousel(quizPackages, completed);

    allPackages = quizPackages; 
    totalPages = Math.ceil(allPackages.length / itemsPerPage);
    
    prevBtn.addEventListener('click', goToPrevPage);
    nextBtn.addEventListener('click', goToNextPage);

    displayPackagesForPage();
    updatePaginationControls();
});

// --- Fungsi Helper Acak Array ---
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --- Fungsi Setup Carousel ---
function setupRecommendedCarousel(allPackages, completed) {
    const incompletePackages = allPackages.filter(paket => !completed.includes(paket.id));
    
    recommendedList.innerHTML = ''; 
    
    if (incompletePackages.length > 0) {
        let recommendedPackages = shuffle([...incompletePackages]).slice(0, 6); // Salin array sebelum shuffle

        if (recommendedPackages.length === 0) { // Jika setelah slice jadi 0 (kasus aneh)
             recommendedSection.innerHTML = '<div class="text-center text-gray-500 py-5">🎉 Selamat! Anda telah menyelesaikan semua modul.</div>';
             return;
        }

        recommendedPackages.forEach(paket => {
            const card = createPackageCard(paket, false); 
            recommendedList.appendChild(card);
        });

        // Duplikasi hanya jika lebih dari ~3 kartu agar cukup untuk loop
        if (recommendedPackages.length > 3) { 
            recommendedPackages.forEach(paket => {
                const cardClone = createPackageCard(paket, false);
                cardClone.classList.add('clone'); // Tandai klon jika perlu
                recommendedList.appendChild(cardClone);
            });
            
            recommendedList.classList.add('animate');
            // Durasi: Sesuaikan kecepatan di sini (misal: 10 detik per kartu)
            const duration = recommendedPackages.length * 10; 
            recommendedList.style.animationDuration = `${duration}s`;
        } else {
            // Jika kartu sedikit, jangan animasikan loop, cukup biarkan scroll
             recommendedList.parentElement.classList.add('overflow-x-auto');
        }

    } else {
        recommendedSection.innerHTML = '<div class="text-center text-green-600 font-semibold py-5 text-lg">🎉 Selamat! Anda telah menyelesaikan semua modul.</div>';
    }
}


// --- Fungsi Helper Pembuat Kartu ---
function createPackageCard(paket, isCompleted) {
    const cardWrapper = document.createElement('div');
    // Untuk grid utama, gunakan kolom Bootstrap
    if (!recommendedList.contains(paketListContainer)) { // Cek jika bukan di carousel
         cardWrapper.className = 'col-12 col-md-6 col-lg-3 mb-4 d-flex'; // Kolom Bootstrap
    }

    const card = document.createElement('div');
    // Tailwind classes for card styling
    card.className = `card h-100 border-l-4 ${isCompleted ? 'border-green-500 bg-gray-50' : 'border-red-600 hover:shadow-lg transition duration-200'} flex-grow-1`; 
    card.style.cursor = isCompleted ? 'not-allowed' : 'pointer';

    card.innerHTML = `
        <div class="card-body d-flex flex-column">
            <h3 class="card-title text-lg font-semibold mb-2 ${isCompleted ? 'text-gray-500' : 'text-red-700'}">${paket.title}</h3>
            <p class="card-text text-gray-600 text-sm flex-grow-1">${paket.description}</p>
            ${isCompleted ? '<span class="badge bg-green-500 text-white align-self-start mt-2">Selesai</span>' : ''}
        </div>
    `;
    
    if (!isCompleted) {
        card.addEventListener('click', () => selectPaket(paket.id));
    } else {
         card.style.opacity = '0.8';
    }

    // Jika bukan carousel, masukkan card ke wrapper kolom Bootstrap
    if (!recommendedList.contains(paketListContainer)) {
        cardWrapper.appendChild(card);
        return cardWrapper;
    } else {
        // Jika carousel, kembalikan card langsung (karena flexbox)
        card.classList.add('w-72', 'flex-shrink-0'); // Tailwind width for carousel items
        return card;
    }
}


// --- Fungsi Logika Pagination (untuk Grid Utama) ---
function displayPackagesForPage() {
    paketListContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // Gunakan quizPackages asli untuk pagination, karena allPackages bisa berubah (carousel)
    const packagesToShow = quizPackages.slice(startIndex, endIndex); 

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');

    packagesToShow.forEach(paket => {
        const isCompleted = completed.includes(paket.id);
        // Buat card dalam wrapper kolom Bootstrap
        const cardElement = createPackageCard(paket, isCompleted); 
        paketListContainer.appendChild(cardElement);
    });
}

function updatePaginationControls() {
    pageInfo.textContent = `Halaman ${currentPage} / ${totalPages}`;
    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage === totalPages);

    if (totalPages <= 1) {
        paginationControls.classList.add('d-none'); // Bootstrap class
    } else {
        paginationControls.classList.remove('d-none'); // Bootstrap class
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
    skorGlobalText.textContent = totalScore;
}

// Konfirmasi sebelum Reset
function confirmResetGlobalScore() {
    Swal.fire({
        title: 'Reset Skor?',
        text: "Semua progres poin dan modul yang selesai akan dihapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33', // Merah
        cancelButtonColor: '#6c757d', // Abu
        confirmButtonText: 'Ya, Reset!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            resetGlobalScore();
        }
    })
}

function resetGlobalScore() {
    localStorage.removeItem('pancasilaGameScore');
    localStorage.removeItem('pancasilaCompletedQuizzes');
    Swal.fire(
        'Direset!',
        'Skor dan progres Anda telah dihapus.',
        'success'
    ).then(() => {
         window.location.reload(); // Refresh halaman
    });
}