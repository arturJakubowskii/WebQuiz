var highscoreNameArr = [];
var highscorePointsArr = [];


function takeUserName () {
    let username = prompt("What is your name?");
    localStorage.setItem("storageName2",username);
    return username;
}

function saveToHighscores (){
    var totalScore = localStorage.getItem("storageName");
    var username = localStorage.getItem("storageName2");
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
    // for(let i = 0; i<= highscoreNameArr.length; i++) {
        document.getElementById("username").innerText = highscoreNameArr[0];
        document.getElementById("scores").innerText = highscorePointsArr[0];
    // }
}
saveToHighscores();
printHighscores();