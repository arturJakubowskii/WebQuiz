let highscoreArr = [];

function takeUserName () {
    let username = prompt("What is your name?");
    return username;
}
function finishingScore () {
    score = 10;
    return score;
}
function saveToHighscores (){
    highscoreArr.push("Name: " + takeUserName()+ " Score: " + finishingScore());
    console.log(highscoreArr);
}

function endStatistics (){
    document.getElementById("congratulation").innerHTML = "Congratulation, You Finished The Game";
    document.getElementById("userName").innerHTML = "Your username: " + takeUserName();
    document.getElementById("userScore").innerHTML = "Your Final Score: " + finishingScore();
}
endStatistics();