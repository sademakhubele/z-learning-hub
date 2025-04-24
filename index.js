function checkAnswer(button) {
    const resultBox = button.parentElement.querySelector('.quiz-result');
    const refreshButton = button.parentElement.querySelector('.refresh-button');
    
    const isCorrect = button.dataset.correct === "true";

    if (isCorrect) {
        resultBox.textContent = "✅ Correct!";
        resultBox.style.color = "green";
        refreshButton.style.display = "none";
    } else {
        resultBox.textContent = "❌ Try again!";
        resultBox.style.color = "red";
        refreshButton.style.display = "inline-block"; 
    }
}

function resetQuiz(button) {
    const quizBox = button.parentElement;
    const resultBox = quizBox.querySelector('.quiz-result');
    resultBox.textContent = "";
    button.style.display = "none";
}

//afrikaans
function toggleLanguage(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('show-english')
}

function speakText() {
    const text = document.getElementById('text').innerText;
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();
    const afVoice = voices.find(v => v.lang.includes('af'));

    if (afVoice) {
        utterance.voice = afVoice;
    } else {
        alert('Afrikaans stem nie beskikbaar op hierdie toestel nie.');
    }

    speechSynthesis.speak(utterance);
}

window.speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  
