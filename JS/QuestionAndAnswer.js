let answerList = [];
let questionList = [];
let trueAnswers = ["Germany", "Thanedd Incident", "Euro"];

questionList[0] = ["Mercedes is company from:"];
questionList[1] = ["Dijksta's leg is broken because of:"];
questionList[2] = ["What's the currency in France?"];

answerList[0] = ["USA", "France", "Japan", "Germany"];
answerList[1] = ["Drunk Accident", "Thanedd Incident", "Roof Collapse", "Bad Step"];
answerList[2] = ["Euro", "Dollar", "Mark", "Rubel"];

function putQuestionToHTML(questionListIndex) {
    document.getElementById("question").innerText = questionList[questionListIndex];
}

function putAnswerToHTML(answerListIndex) {
    document.getElementById("answer1").innerText = answerList[answerListIndex][0];
    document.getElementById("answer2").innerText = answerList[answerListIndex][1];
    document.getElementById("answer3").innerText = answerList[answerListIndex][2];
    document.getElementById("answer4").innerText = answerList[answerListIndex][3];
}

function checkIfAnswerIsTrue(answer) {
    return trueAnswers.includes(answer);
}

function takeIdFromClickedButton(buttonId) {
    return buttonId;
}


function mainGameStart() {
    let n = 0;
    switch (n) {
        case n = 0:
            putAnswerToHTML(0);
            putQuestionToHTML(0);
            break;

        case n = 1:
            putAnswerToHTML(1);
            putQuestionToHTML(1);
            break;

        case n = 2:
            putAnswerToHTML(2);
            putQuestionToHTML(2);
            break;
    }
}

mainGameStart();