var startButtonEl = document.querySelector(".startBtn");
var mainQuizSection = document.querySelector(".quizSection");


var deleteStartBtn = function() {
    startButtonEl.remove();
    console.log("Success");
    spawnQuestion();
}

var questionA = {
    question: "Insert question here?"
};

// create question with next button

var spawnQuestion = function() {
    // create, fill in content, append
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "quizQuestion";
    questionContainerEl.innerHTML = "<h1 class='question'>" + questionA.question + "</h1>";
    mainQuizSection.appendChild(questionContainerEl);

   

    var quizCheckerEl = document.createElement("div");
    quizCheckerEl.className = "quizChecker";

}

var spawnAnswer = function() {
    var answerContainerEl = document.createElement("div");
    answerContainerEl.className = "quizAnswer";
    
}

startButtonEl.addEventListener('click', deleteStartBtn);