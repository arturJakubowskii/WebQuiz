let questionNumber = 1;

function nextQuestion() {
    questionNumber ++;
    console.log(questionNumber)
    document.getElementById("questionNumber").innerHTML = "Question Number: " + questionNumber;
}