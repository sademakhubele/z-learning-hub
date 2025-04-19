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
