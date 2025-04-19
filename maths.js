function checkAnswer(button, correctAnswer) {
    const resultBox = button.parentElement.querySelector('.quiz-result');
    const userAnswer = button.innerText.trim();

    console.log("User Answer:", userAnswer, "| Correct Answer:", correctAnswer);


    if (userAnswer === correctAnswer) {
        resultBox.textContent = "✅ Correct!";
        resultBox.style.color = "green";
    } else {
        resultBox.textContent = "❌ Try again!";
        resultBox.style.color = "red";
    }
}


function resetQuiz(button) {
    const quizBox = button.parentElement;
    const resultBox = quizBox.querySelector('.quiz-result');

    resultBox.textContent = "";
    button.style.display = "";
}
