function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    submitButton.onclick = function(){
		startQuiz(questions, quizContainer, resultsContainer);
	}

	function showQuestions(questions, quizContainer){
		var questions = [{
            questions: "what is 1+1?",
            answerChoice: ["2","3","4"],
            answer: "2"
        },
        [{
            questions: "what is 2+2?",
            answerChoice:["2","3","4"],
            answer: "4"}],
        ]
	}

	
}


