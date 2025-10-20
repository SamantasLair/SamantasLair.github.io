document.addEventListener('DOMContentLoaded', () => {
    const quizId = sessionStorage.getItem('selectedQuizId');

    if (!quizId) {
        window.location.href = 'index.html';
        return;
    }

    const completed = JSON.parse(localStorage.getItem('pancasilaCompletedQuizzes') || '[]');
    if (completed.includes(quizId)) {
        alert('Anda sudah menyelesaikan paket soal ini!');
        window.location.href = 'index.html';
        return;
    }

    if (typeof quizPackages === 'undefined') {
        questionTitle.innerText = 'Gagal memuat data paket soal. Silakan kembali.';
        return;
    }

    const selectedPackage = quizPackages.find(p => p.id === quizId);

    if (!selectedPackage) {
        questionTitle.innerText = 'Paket soal tidak ditemukan. Silakan kembali.';
        return;
    }
    
    quizData = selectedPackage.soal; 
    
    if (quizData && quizData.length > 0) {
        startQuiz();
    } else {
        questionTitle.innerText = 'Paket soal ini kosong. Silakan kembali.';
    }
});

let currentQuestionIndex = 0;
let score = 0;
let quizData = [];

const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const progressBar = document.getElementById('progress-bar-full');

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
    
    const pointsEarned = score * 10;
    scoreText.innerText = `Skor Kuis Ini: ${pointsEarned} Poin`;
    
    saveGlobalScore(pointsEarned);
}

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