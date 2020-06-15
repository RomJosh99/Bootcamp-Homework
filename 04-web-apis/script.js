var quizQuestions = {
    questionOne:"Commonly used data types do NOT include.", 
    oneAnswers: ["Strings","Booleans","Alerts","Numbers"],
    answerOne:"Booleans",

    questionTwo:"The condition in an if / else statement is enclosed within.", 
    twoAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerTwo:"2",

    questionThree:"The condition in an if / else statement is enclosed within.", 
    twoAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerTwo:"2",

    questionFour:"The condition in an if / else statement is enclosed within.", 
    twoAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerTwo:"2",

    questionFive:"The condition in an if / else statement is enclosed within.", 
    twoAnswers: ["Quotes","Curly brackets","Parenthesis","Square brackets"],
    answerTwo:"2",
}



function startQuiz() {
    document.getElementById("question").innerHTML = quizQuestions.questionOne;
    document.getElementById("answer").innerHTML = quizQuestions.oneAnswers[0];
    document.getElementById("answer2").innerHTML = quizQuestions.oneAnswers[1];
    document.getElementById("answer3").innerHTML = quizQuestions.oneAnswers[2];
    document.getElementById("answer4").innerHTML = quizQuestions.oneAnswers[3];
    document.getElementById("answerButton2").innerHTML = quizQuestions.answerOne[3];


}
function answerButton1() {

}