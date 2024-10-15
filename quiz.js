var bitina = document.getElementById("submit-answer");
bitina.onclick = function checkAnswer() {
    var correctAnswer = 4;
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}


/* sssssss
 *//* document.getElementById("submit-answer").addEventListener("click", checkAnswer); */