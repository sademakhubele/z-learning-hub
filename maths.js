function checkAnswer(button, correctAnswer) {
    const resultBox = button.parentElement.querySelector('.quiz-result');
    const userAnswer = button.innerText.trim();

    if (userAnswer === correctAnswer) {
        resultBox.textContent = "✅ Correct!";
        resultBox.style.color = "green";
    } else {
        resultBox.textContent = "❌ Try again!";
        resultBox.style.color = "red";
    }
}
