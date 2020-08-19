let score = 1000;
let totalScore = 0;
let questionScore;

function addPoints() {
    if(testUserAnswer === true && timePassed > 0){
        questionScore = score / timePassed;
        totalScore += Math.floor(questionScore);
        document.getElementById("points").innerHTML = "Your Points: " + totalScore;
        onTimesUp();
        alert("Correct!");
        if (questionNumber >= trueAnswers.length){
            document.location.href = 'endPage.html';
        }
        startTimer();
    }
    else if (testUserAnswer === true && timePassed === 0){
        timePassed = 1;
        questionScore = score / timePassed;
        totalScore += Math.floor(questionScore);
        document.getElementById("points").innerHTML = "Your Points: " + totalScore;
        onTimesUp();
        alert("Correct!");
        if (questionNumber >= trueAnswers.length){
            document.location.href = 'endPage.html';
        }
        startTimer();
    }
    else if (testUserAnswer === false){
        onTimesUp();
        alert("Wrong Answer!");
        if (questionNumber >= trueAnswers.length){
            document.location.href = 'endPage.html';
        }
        startTimer();
    }
}