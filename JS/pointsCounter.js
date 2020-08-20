let score = 1000;
let totalScore = 0;
let questionScore;

function addPoints() {
    if(testUserAnswer === true && timePassed > 0){
        counter();
    }
    else if (testUserAnswer === true && timePassed === 0){
        timePassed = 1;
        counter();
    }
    else if (testUserAnswer === false){
        onTimesUp();
        alert("Wrong Answer!");
        if (questionNumber >= trueAnswers.length){
            localStorage.setItem("storageName",totalScore);
            document.location.href = 'endPage.html';
        }
        startTimer();
    }
}

function counter(){
    questionScore = score / timePassed;
    totalScore += Math.floor(questionScore);
    document.getElementById("points").innerHTML = "Your Points: " + totalScore;
    onTimesUp();
    alert("Correct!");
    if (questionNumber >= trueAnswers.length){
        localStorage.setItem("storageName",totalScore);
        document.location.href = 'endPage.html';
    }
    startTimer();
}