let score = 0;

function addPoints() {
    if(testUserAnswer === true){
        score ++;
        console.log(score);
        document.getElementById("points").innerHTML = "Your points: " + score;
        onTimesUp();
        alert("wygrałeś talon");
        startTimer();
    }
    else{
        onTimesUp();
        alert("nie wygrałeś");
        startTimer();
    }
}
