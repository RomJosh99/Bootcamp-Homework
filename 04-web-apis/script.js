const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "C"
}, {
    question: "Arrays in JavaScript can be used to store _",
    choiceA: "Numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correct: "A"
}, {
    question: "String values must be enclosed within_ when being assigned to variables",
    choiceA: "comments",
    choiceB: "currly brackets",
    choiceC: "quotes",
    choiceD: "paranthesis",
    correct: "D"
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "Javascript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correct: "D"
}, {
    question: "The condition in an if/else statement is enclosed within_",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "paranthesis",
    choiceD: "square brackets",
    correct: "B"
}];



const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);


function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}


function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}


function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++
    } else {
        count = 0;

        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {

            clearInterval(TIMER);
            scoreRender();
        }
    }
}



function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {

        score++;

        answerIsCorrect();
    } else {

        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {

        clearInterval(TIMER);
        scoreRender();
    }
}


function answerIsCorrect() {
    document.getElementById(runningQuestion);
}


function answerIsWrong() {
    document.getElementById(runningQuestion);
}


function scoreRender() {
    scoreDiv.style.display = "block";


    const scorePerCent = Math.round(100 * score / questions.length);

    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}