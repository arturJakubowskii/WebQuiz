let score = 1000;
let totalScore = 0;
let questionScore;

function addPoints() {
    let goNext = false;
    if(testUserAnswer === true && timePassed > 0){
        counter();
    }
    else if (testUserAnswer === true && timePassed === 0){
        timePassed = 1;
        counter();
    }
    else if (testUserAnswer === false){
        Swal.fire(
            'Wrong Choice!',
            'No Points Earned!',
            'error',
        ).then((value => {
            startTimer()
        }))
        onTimesUp();
        if (questionNumber >= trueAnswers.length){
            localStorage.setItem("storageName",totalScore);
            document.location.href = 'endPage.html';
        }
    }
}

function counter(){
    questionScore = score / timePassed;
    totalScore += Math.floor(questionScore);
    document.getElementById("points").innerHTML = "Your Points: " + totalScore;
    Swal.fire(
        'Good job!',
        'You Guessed Correctly!',
        'success',
    ).then((value => {
        startTimer()
    }))
    onTimesUp();
    if (questionNumber >= trueAnswers.length){
        localStorage.setItem("storageName",totalScore);
        document.location.href = 'endPage.html';
    }
}