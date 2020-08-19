let answerList = [];
let questionList = [];
let trueAnswers = ["Germany", "Thanedd Incident", "Euro"];
let buttonIdVariable = "";
let userAnswer = "";
let testUserAnswer = false;



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


function runMainFunctions(index) {
    putAnswerToHTML(index);
    putQuestionToHTML(index);
}

function mainGameStart() {
    switch (questionNumber) {
        case questionNumber = 1:

            runMainFunctions(0);
            break;

        case questionNumber = 2:

            runMainFunctions(1);
            break;

        case questionNumber = 3:

            runMainFunctions(2);
            break;
    }
}



mainGameStart();


