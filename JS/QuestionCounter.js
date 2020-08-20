let questionNumber = 1;

function nextQuestion() {
    questionNumber ++;
    document.getElementById("questionNumber").innerHTML = "Question Number: " + questionNumber;
}