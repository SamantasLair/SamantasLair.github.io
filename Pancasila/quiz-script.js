document.addEventListener('DOMContentLoaded', () => {
    const quizId = sessionStorage.getItem('selectedQuizId');

    if (!quizId) {
        // Redirect jika tidak ada ID
        window.location.href = 'index.html';
        return;
    }

    // Cek apakah sudah selesai
    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
    if (completed.includes(quizId)) {
        // Tampilkan notifikasi SweetAlert jika sudah selesai
        Swal.fire({
            title: 'Sudah Selesai',
            text: 'Anda sudah menyelesaikan modul pembelajaran ini.',
            icon: 'info',
            confirmButtonText: 'Kembali ke Beranda',
            confirmButtonColor: '#E60000' 
        }).then(() => {
            window.location.href = 'index.html';
        });
        return; // Hentikan eksekusi lebih lanjut
    }

    // Lanjutkan memuat data jika belum selesai
    if (typeof quizPackages === 'undefined') {
        showErrorAlert('Gagal memuat data paket soal.');
        return;
    }

    const selectedPackage = quizPackages.find(p => p.id === quizId);

    if (!selectedPackage) {
         showErrorAlert('Paket soal tidak ditemukan.');
        return;
    }
    
    quizData = selectedPackage.soal; 
    
    if (quizData && quizData.length > 0) {
        startQuiz();
    } else {
        showErrorAlert('Paket soal ini kosong.');
    }
});

// Variabel Global Kuis
let currentQuestionIndex = 0;
let score = 0;
let quizData = [];

// Elemen Kuis
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const progressBar = document.getElementById('progress-bar-full');

// Fungsi untuk menampilkan error dengan SweetAlert
function showErrorAlert(message) {
     Swal.fire({
            title: 'Error',
            text: message + ' Silakan kembali ke beranda.',
            icon: 'error',
            confirmButtonText: 'Kembali',
            confirmButtonColor: '#E60000'
        }).then(() => {
            window.location.href = 'index.html';
        });
}

// Fungsi Memulai Kuis
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.classList.add('d-none'); // Bootstrap class
    quizContainer.classList.remove('d-none'); // Bootstrap class
    resultContainer.classList.add('d-none'); // Bootstrap class
    showQuestion();
}

// Fungsi Menampilkan Pertanyaan
function showQuestion() {
    resetState();
    const question = quizData[currentQuestionIndex];

    // Animasi masuk (jika ada kelas .anim-fade-in-up di CSS)
    questionTitle.classList.remove('anim-fade-in-up');
    void questionTitle.offsetWidth; 
    questionTitle.textContent = question.question;
    questionTitle.classList.add('anim-fade-in-up');
    
    updateProgressBar();

    // Buat Tombol Opsi dengan class Bootstrap & Tailwind
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        // Gunakan btn-lg untuk tombol lebih besar, btn-outline-secondary untuk tampilan awal
        button.className = 'btn btn-lg btn-outline-secondary w-100 text-start p-3 anim-fade-in-up'; 
        button.textContent = option;
        
        button.style.animationDelay = `${0.3 + index * 0.1}s`; 
        
        button.addEventListener('click', () => selectAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

// Fungsi Mereset State Pertanyaan
function resetState() {
    nextBtn.classList.add('d-none'); // Bootstrap class
    optionsContainer.innerHTML = ''; // Hapus opsi sebelumnya
}

// Fungsi Memilih Jawaban
function selectAnswer(button, selectedOption) {
    const correct = selectedOption === quizData[currentQuestionIndex].answer;

    // Nonaktifkan semua tombol dan hapus class outline
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('btn-outline-secondary', 'anim-fade-in-up'); // Hapus outline dan animasi
        btn.classList.add('disabled'); // Tambah class disabled Bootstrap

        // Beri warna berdasarkan jawaban
        if (btn.textContent === quizData[currentQuestionIndex].answer) {
            btn.classList.add('btn-success'); // Hijau untuk jawaban benar
        } else if (btn === button && !correct) {
             btn.classList.add('btn-danger'); // Merah untuk jawaban salah yang dipilih
        } else {
             btn.classList.add('btn-secondary', 'opacity-75'); // Abu-abu untuk opsi lain
        }
    });

    if (correct) {
        score++;
    }

    nextBtn.classList.remove('d-none'); // Tampilkan tombol Selanjutnya
}

// Fungsi Menampilkan Hasil
function showResults() {
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    
    const pointsEarned = score * 10;
    scoreText.textContent = `${pointsEarned} Poin`;
    
    saveGlobalScore(pointsEarned);

    // Tampilkan SweetAlert Hasil
    Swal.fire({
        title: 'Modul Selesai!',
        html: `Anda memperoleh <strong>${pointsEarned} Poin</strong>.<br>Skor total Anda telah diperbarui.`,
        icon: 'success',
        confirmButtonText: 'Lanjutkan',
        confirmButtonColor: '#E60000'
    });
}

// Fungsi Menyimpan Skor Global
function saveGlobalScore(pointsEarned) {
    const currentTotalScore = Number(localStorage.getItem('pancasilaGameScore') || 0);
    const newTotalScore = currentTotalScore + pointsEarned;
    localStorage.setItem('pancasilaGameScore', newTotalScore);
    
    const quizId = sessionStorage.getItem('selectedQuizId');
    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
    
    if (quizId && !completed.includes(quizId)) {
        completed.push(quizId);
        localStorage.setItem('pancasilaCompletedQuizzes', JSON.stringify(completed));
    }
}

// Fungsi Update Progress Bar
function updateProgressBar() {
    const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressBar.setAttribute('aria-valuenow', progressPercent);
}

// Event Listener Tombol Selanjutnya
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
});