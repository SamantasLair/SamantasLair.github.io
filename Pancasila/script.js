// --- Variabel Global & Elemen ---
let allPackages = [];
let currentPage = 1;
const itemsPerPage = 12; // 4x3 grid
let totalPages = 1;

// ---
let recommendedPool = []; 
let currentRecommended = []; 
let recommendationInterval; 

// ---
const paketListContainer = document.getElementById('paket-list');
const paginationControls = document.getElementById('pagination-controls');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// ---
const skorGlobalText = document.getElementById('skor-global-text');
const resetSkorBtn = document.getElementById('reset-skor-btn');

// ---
const recommendedSection = document.getElementById('recommended-section');
const recommendedList = document.getElementById('recommended-list');


// --- Event Listener Utama ---
document.addEventListener('DOMContentLoaded', () => {
    
    loadGlobalScore();
    resetSkorBtn.addEventListener('click', confirmResetGlobalScore); 

    if (typeof quizPackages === 'undefined' || quizPackages.length === 0) {
        paketListContainer.innerHTML = '<div class="col-12"><p class="text-center text-gray-500 my-5">Belum ada modul pembelajaran yang tersedia.</p></div>';
        recommendedSection.classList.add('d-none');
        paginationControls.classList.add('d-none');
        return;
    }

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
    
    setupDynamicRecommendations(quizPackages, completed);

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

// --- Fungsi Setup Carousel Dinamis ---
function setupDynamicRecommendations(allPackages, completed) {
    const incompletePackages = allPackages.filter(paket => !completed.includes(paket.id));
    recommendedList.innerHTML = '';

    if (incompletePackages.length === 0) {
        recommendedSection.innerHTML = '<div class="text-center text-green-600 font-semibold py-5 text-lg w-100">🎉 Selamat! Anda telah menyelesaikan semua modul.</div>';
        return;
    }

    recommendedPool = shuffle(incompletePackages);
    currentRecommended = recommendedPool.splice(0, 3);
    
    displayCurrentRecommended();

    if (recommendedPool.length > 0 || currentRecommended.length > 0) {
        recommendationInterval = setInterval(updateRecommended, 5000); // Diubah ke 5 detik
    }
}

function displayCurrentRecommended() {
    recommendedList.innerHTML = ''; 
    currentRecommended.forEach((paket, index) => {
        const card = createPackageCard(paket, false, true); 
        card.classList.add('anim-fade-in'); // Ganti animasi
        card.style.animationDelay = `${index * 0.1}s`;
        recommendedList.appendChild(card);
    });
}

function updateRecommended() {
    if (currentRecommended.length === 0) {
        clearInterval(recommendationInterval);
        return;
    }

    if (recommendedPool.length === 0) {
        const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
        const allIncomplete = quizPackages.filter(p => !completed.includes(p.id));
        
        const currentIds = currentRecommended.map(p => p.id);
        recommendedPool = shuffle(allIncomplete.filter(p => !currentIds.includes(p.id)));

        if (recommendedPool.length === 0) {
            clearInterval(recommendationInterval);
            return; 
        }
    }

    const newItem = recommendedPool.shift();
    
    const removedIndex = Math.floor(Math.random() * currentRecommended.length);
    const removedItem = currentRecommended.splice(removedIndex, 1)[0];
    
    if(removedItem) {
        recommendedPool.push(removedItem); 
    }

    if(newItem) {
        currentRecommended.push(newItem);
    }
    
    displayCurrentRecommended();
}


// --- Fungsi Helper Pembuat Kartu ---
function createPackageCard(paket, isCompleted, isCarousel = false) {
    const cardWrapper = document.createElement('div');
    
    if (!isCarousel) {
         cardWrapper.className = 'col-12 col-md-6 col-lg-3 mb-4 d-flex'; // Kolom Bootstrap
    }

    const card = document.createElement('div');
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

    if (!isCarousel) {
        cardWrapper.appendChild(card);
        return cardWrapper;
    } else {
        card.classList.add('w-72', 'flex-shrink-0'); // Tailwind width for carousel items
        return card;
    }
}


// --- Fungsi Logika Pagination (untuk Grid Utama) ---
function displayPackagesForPage() {
    paketListContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const packagesToShow = quizPackages.slice(startIndex, endIndex); 

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');

    packagesToShow.forEach(paket => {
        const isCompleted = completed.includes(paket.id);
        const cardElement = createPackageCard(paket, isCompleted, false); 
        paketListContainer.appendChild(cardElement);
    });
}

function updatePaginationControls() {
    pageInfo.textContent = `Halaman ${currentPage} / ${totalPages}`;
    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage === totalPages);

    if (totalPages <= 1) {
        paginationControls.classList.add('d-none'); 
    } else {
        paginationControls.classList.remove('d-none'); 
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

function confirmResetGlobalScore() {
    Swal.fire({
        title: 'Reset Skor?',
        text: "Semua progres poin dan modul yang selesai akan dihapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33', 
        cancelButtonColor: '#6c757d', 
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
         window.location.reload(); 
    });
}