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