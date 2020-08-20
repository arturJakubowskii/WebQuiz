let answerList = [];
let questionList = [];
let trueAnswers = ["Germany", "Thanedd Incident", "Euro","FC Liverpool","RPG","Oxygen","50m","Nile","Johnny Depp","Mount Everest"];
let buttonIdVariable = "";
let userAnswer = "";
let testUserAnswer = false;



questionList[0] = "Mercedes is company from:";
questionList[1] = "Dijksta's leg is broken because of:";
questionList[2] = "What's the currency in France?";
questionList[3] = "Which Team Won The Champions League In Year 2018/2019?";
questionList[4] = "What Type Of Game Gothic Is?";
questionList[5] = "What element does 'O' represent on the periodic table?";
questionList[6] = "In meters, how long is an Olympic swimming pool?";
questionList[7] = "What's the name of the river that runs through Egypt?";
questionList[8] = "Who played Jack Sparrow in Pirates Of The Caribbean";
questionList[9] = "What's the highest mountain in the world?";



answerList[0] = ["USA", "France", "Japan", "Germany"];
answerList[1] = ["Drunk Accident", "Thanedd Incident", "Roof Collapse", "Bad Step"];
answerList[2] = ["Euro", "Dollar", "Mark", "Rubel"];
answerList[3] = ["FC Liverpool", "Tottenham Hotspoor", "Intermediolan", "Paris Saint Germain"];
answerList[4] = ["Shooter","RPG","Horror Game", "RTS"];
answerList[5] = ["Oxygen","Carbon","Zinc","Copper"];
answerList[6] = ["60m","40m","50m","30m"];
answerList[7] = ["Yangtze","Amazon","Nile","Niger"];
answerList[8] = ["Leonardo DiCaprio","Christian Bale","Brad Pitt","Johnny Depp"];
answerList[9] = ["K2","Mount Everest","Makalu","Lhotse"];

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
        case questionNumber = 4:

            runMainFunctions(3);
            break;
        case questionNumber = 5:

            runMainFunctions(4);
            break;
        case questionNumber = 6:

            runMainFunctions(5);
            break;
        case questionNumber = 7:

            runMainFunctions(6);
            break;
        case questionNumber = 8:

            runMainFunctions(7);
            break;
        case questionNumber = 9:

            runMainFunctions(8);
            break;
        case questionNumber = 10:

            runMainFunctions(9);
            break;
    }
}



mainGameStart();


