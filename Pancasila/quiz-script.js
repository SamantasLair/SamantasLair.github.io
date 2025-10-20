document.addEventListener('DOMContentLoaded', () => {
    // Ambil quizId yang disimpan dari halaman index
    const quizId = sessionStorage.getItem('selectedQuizId');

    if (!quizId) {
        // Jika tidak ada id, kembali ke index
        window.location.href = 'index.html';
        return;
    }

    // Pastikan quizPackages (dari semua-paket.js) sudah dimuat
    if (typeof quizPackages === 'undefined') {
        questionTitle.innerText = 'Gagal memuat data paket soal. Silakan kembali.';
        return;
    }

    // Cari paket soal yang sesuai berdasarkan id
    const selectedPackage = quizPackages.find(p => p.id === quizId);

    if (!selectedPackage) {
        questionTitle.innerText = 'Paket soal tidak ditemukan. Silakan kembali.';
        return;
    }
    
    // Set data kuis global dari array 'soal' di dalam paket yang dipilih
    quizData = selectedPackage.soal; 
    
    if (quizData && quizData.length > 0) {
        startQuiz();
    } else {
        questionTitle.innerText = 'Paket soal ini kosong. Silakan kembali.';
    }
});

let currentQuestionIndex = 0;
let score = 0;
let quizData = []; // Ini akan diisi oleh listener DOMContentLoaded

const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const progressBar = document.getElementById('progress-bar-full');

// Fungsi loadQuizData() sudah tidak diperlukan lagi

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = quizData[currentQuestionIndex];
    questionTitle.innerText = question.question;
    
    updateProgressBar();

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(button, selectedOption) {
    const correct = selectedOption === quizData[currentQuestionIndex].answer;

    if (correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }

    Array.from(optionsContainer.children).forEach(btn => {
        if (btn.innerText === quizData[currentQuestionIndex].answer) {
            if (!correct) {
                btn.classList.add('correct');
            }
        }
        btn.disabled = true;
    });

    nextBtn.classList.remove('hidden');
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreText.innerText = `${score} / ${quizData.length}`;
}

function updateProgressBar() {
    const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
});