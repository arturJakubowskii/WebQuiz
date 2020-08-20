let highscoreNameArr = [];
let highscorePointsArr = [];


function takeUserName () {
    let username = prompt("What is your name?");
    localStorage.setItem("storageName2",username);
    return username;
}

function saveToHighscores (){
    let totalScore = localStorage.getItem("storageName");
    let username = localStorage.getItem("storageName2");
    highscoreNameArr.push(username);
    highscorePointsArr.push(totalScore);
    console.log(highscorePointsArr[0]);
    console.log(highscoreNameArr[0]);
}

function endStatistics (){
    totalScore = localStorage.getItem("storageName");
    document.getElementById("congratulation").innerHTML = "Congratulation, You Finished The Game";
    document.getElementById("userName").innerHTML = "Your username: " + takeUserName();
    document.getElementById("userScore").innerHTML = "Your Final Score: " + totalScore;
    console.log(totalScore);
}

function printHighscores(){
        document.getElementById("username").innerText = "1. " + "Username: " + highscoreNameArr[0] + "      Score: " + highscorePointsArr[0];
}

saveToHighscores();
printHighscores();