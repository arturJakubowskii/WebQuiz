let score = 0;
let answer = true;

function addPoints() {
    if(answer === true){
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
