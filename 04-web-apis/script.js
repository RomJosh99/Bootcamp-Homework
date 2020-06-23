var quizQuestions = {
    questionOne:"Commonly used data types do NOT include.", 
    oneAnswers: ["Strings","Booleans","Alerts","Numbers"],
    answerOne:"Booleans",

    questionTwo:"The condition in an if / else statement is enclosed within.", 
    twoAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerTwo:"2",

    questionThree:"The condition in an AAAAAAA / else statement is enclosed within.", 
    threeAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerThree:"2",

    questionFour:"The condition in an if BBBBBBBBB/ else statement is enclosed within.", 
    fourAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerFour:"2",

    questionFive:"The condition in an if  CCCCCCCCC/ else statement is enclosed within.", 
    fiveAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerFive:"2",
}
var total_seconds = 30 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;
var saveName;


function testTimer() {

}


// Start Quiz //
function startQuiz() {
    document.getElementById("question").innerHTML = quizQuestions.questionOne;
    document.getElementById("answer").innerHTML = quizQuestions.oneAnswers[0];
    document.getElementById("answer2").innerHTML = quizQuestions.oneAnswers[1];
    document.getElementById("answer3").innerHTML = quizQuestions.oneAnswers[2];
    document.getElementById("answer4").innerHTML = quizQuestions.oneAnswers[3];
    document.getElementById("answerButton2").innerHTML = quizQuestions.answerOne[3];
}

// Questions //
function nextQuiz() {
    document.getElementById("question").innerHTML = quizQuestions.questionTwo;
    document.getElementById("answer").innerHTML = quizQuestions.twoAnswers[0];
    document.getElementById("answer2").innerHTML = quizQuestions.twoAnswers[1];
    document.getElementById("answer3").innerHTML = quizQuestions.twoAnswers[2];
    document.getElementById("answer4").innerHTML = quizQuestions.twoAnswers[3];
    document.getElementById("answerButton2").innerHTML = quizQuestions.answerTwo[3];

}

function nextQuiz2() {
    document.getElementById("question").innerHTML = quizQuestions.questionThree;
    document.getElementById("answer").innerHTML = quizQuestions.threeAnswers[0];
    document.getElementById("answer2").innerHTML = quizQuestions.threeAnswers[1];
    document.getElementById("answer3").innerHTML = quizQuestions.threeAnswers[2];
    document.getElementById("answer4").innerHTML = quizQuestions.threeAnswers[3];
    document.getElementById("answerButton2").innerHTML = quizQuestions.answerThree[3];

}

function nextQuiz3() {
    document.getElementById("question").innerHTML = quizQuestions.questionFour;
    document.getElementById("answer").innerHTML = quizQuestions.fourAnswers[0];
    document.getElementById("answer2").innerHTML = quizQuestions.fourAnswers[1];
    document.getElementById("answer3").innerHTML = quizQuestions.fourAnswers[2];
    document.getElementById("answer4").innerHTML = quizQuestions.fourAnswers[3];
    document.getElementById("answerButton2").innerHTML = quizQuestions.answerFour[3];

}

function nextQuiz4() {
    document.getElementById("question").innerHTML = quizQuestions.questionFive;
    document.getElementById("answer").innerHTML = quizQuestions.fiveAnswers[0];
    document.getElementById("answer2").innerHTML = quizQuestions.fiveAnswers[1];
    document.getElementById("answer3").innerHTML = quizQuestions.fiveAnswers[2];
    document.getElementById("answer4").innerHTML = quizQuestions.fiveAnswers[3];
    document.getElementById("answerButton2").innerHTML = quizQuestions.answerFive[3];

}