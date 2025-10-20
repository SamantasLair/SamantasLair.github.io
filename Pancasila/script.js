let allPackages = [];
let currentPage = 1;
const itemsPerPage = 12;
let totalPages = 1;

const paketListContainer = document.getElementById('paket-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');
const paginationControls = document.getElementById('pagination-controls');
const skorGlobalContainer = document.getElementById('skor-global-container');
const skorGlobalText = document.getElementById('skor-global-text');
const resetSkorBtn = document.getElementById('reset-skor-btn');


document.addEventListener('DOMContentLoaded', () => {
    
    loadGlobalScore();

    if (typeof quizPackages !== 'undefined' && quizPackages.length > 0) {
        allPackages = quizPackages;
        totalPages = Math.ceil(allPackages.length / itemsPerPage);

        prevBtn.addEventListener('click', goToPrevPage);
        nextBtn.addEventListener('click', goToNextPage);
        resetSkorBtn.addEventListener('click', resetGlobalScore);

        displayPackagesForPage();
        updatePaginationControls();

    } else {
        paketListContainer.innerHTML = '<p>Belum ada paket soal yang tersedia.</p>';
        paginationControls.classList.add('hidden');
    }
});

function displayPackagesForPage() {
    paketListContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const packagesToShow = allPackages.slice(startIndex, endIndex);

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');

    packagesToShow.forEach(paket => {
        const card = document.createElement('div');
        card.className = 'paket-card';
        card.innerHTML = `
            <h3>${paket.title}</h3>
            <p>${paket.description}</p>
        `;
        
        if (completed.includes(paket.id)) {
            card.classList.add('selesai');
        } else {
            card.addEventListener('click', () => selectPaket(paket.id));
        }
        
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
    skorGlobalText.innerText = '0';
    displayPackagesForPage();
}