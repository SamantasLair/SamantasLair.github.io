document.addEventListener('DOMContentLoaded', () => {
    const paketListContainer = document.getElementById('paket-list');

    if (paketListContainer && typeof quizPackages !== 'undefined') {
        if (quizPackages.length === 0) {
            paketListContainer.innerHTML = '<p>Belum ada paket soal yang tersedia.</p>';
            return;
        }

        quizPackages.forEach(paket => {
            const card = document.createElement('div');
            card.className = 'paket-card';
            card.innerHTML = `
                <h3>${paket.title}</h3>
                <p>${paket.description}</p>
            `;
            card.addEventListener('click', () => selectPaket(paket.file));
            paketListContainer.appendChild(card);
        });
    }
});

function selectPaket(paketFile) {
    sessionStorage.setItem('selectedQuizFile', paketFile);
    window.location.href = 'quiz.html';
}