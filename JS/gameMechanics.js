let highscoreArr = [];

function takeUserName () {
    let username = prompt("What is your name?");
    return username;
}

function saveToHighscores (){
    highscoreArr.push("Name: " + takeUserName()+ " Score: " + totalScore);
}

function endStatistics (){
    document.getElementById("congratulation").innerHTML = "Congratulation, You Finished The Game";
    document.getElementById("userName").innerHTML = "Your username: " + takeUserName();
    document.getElementById("userScore").innerHTML = "Your Final Score: " + totalScore;
    console.log(totalScore);
}


endStatistics();