var correctAnswers = 0;
var incorrectAnswers = 0;
var unaswered = 0;
var timeRemaining = 10;
var intervalId;


document.getElementById("button").onclick = function test(){
    var q1 = document.myform.q1.value;
    var q2 = document.myform.q2.value;
    var q3 = document.myform.q3.value;
    var q4 = document.myform.q4.value;
    var q5 = document.myform.q5.value;
    var q6 = document.myform.q6.value;
    var q7 = document.myform.q7.value;
    var q8 = document.myform.q8.value;


    
    if(q1 == "b"){
        correctAnswers++
    }
    else if(q1 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++
    }

    if(q2 == "c"){
        correctAnswers++
    }
    else if(q2 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++
    }
    if(q3 == "c"){
        correctAnswers++
    }
    else if(q3 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++

    }if(q4 == "a"){
        correctAnswers++
    }
    else if(q4 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++

    }if(q5 == "d"){
        correctAnswers++
    }
    else if(q5 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++

    }if(q6 == "c"){
        correctAnswers++
    }
    else if(q6 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++

    }if(q7 == "a"){
        correctAnswers++
    }
    else if(q7 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++

    }if(q8 == "b"){
        correctAnswers++
    }
    else if(q8 == ""){
        unaswered++
    }
    else {
        incorrectAnswers++
    }
    console.log(correctAnswers);
    document.getElementById("correctAnswers").innerHTML = "Correct Answers: " + correctAnswers;
    document.getElementById("incorrectAnswers").innerHTML = "Incorrect Answers: " + incorrectAnswers;
    document.getElementById("unanswered").innerHTML = "Unanswered: " + unaswered;



}



function countdownTimer(){
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    timeRemaining--;
    document.getElementById("time").innerHTML = ("Time Remaining: " + timeRemaining + " Seconds");
    if (timeRemaining === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId)
    document.getElementById("container").style.display = "none";
    document.getElementById("endPage").style.display = "block";
    


}

document.getElementById("startButton").onclick = function start(){
    document.getElementById("startPage").style.display = "none";
    document.getElementById("container").style.display = "block";
    countdownTimer();


}