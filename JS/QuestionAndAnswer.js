let answerList = [];
let questionList = [];
let trueAnswers = ["Germany", "Thanedd Incident", "Euro"];
let buttonIdVariable = "";
let userAnswer = "";
// tests
let testUserAnswer = false;
let checkedAnswerVar = "";



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
    if( trueAnswers.includes(answer)){
        testUserAnswer = true;
        console.log(testUserAnswer);
    }else{
        testUserAnswer = false;
        console.log(testUserAnswer);
    }
}

function takeIdFromClickedButton(buttonId) {
    buttonIdVariable = buttonId;
    takeHTMLContentFromClickedId();
    if (buttonIdVariable !== undefined ) {
        checkIfAnswerIsTrue(userAnswer);
    }
}


function takeHTMLContentFromClickedId() {
   userAnswer = document.getElementById(buttonIdVariable).innerHTML;
   return userAnswer;
}

function waitForClick() {
    if (testUserAnswer === true){
        console.log("yes");
    }else{
        console.log("no");
    }
}

function clickEventListenerFunc() {
    document.getElementById("answer1").addEventListener("click",waitForClick);
    document.getElementById("answer2").addEventListener("click",waitForClick);
    document.getElementById("answer3").addEventListener("click",waitForClick);
    document.getElementById("answer4").addEventListener("click",waitForClick);
}


function mainGameStart() {
    let n = 0;
    switch (n) {
        case n = 0:
            putAnswerToHTML(0);
            putQuestionToHTML(0);
            clickEventListenerFunc();

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


