var startButtonEl = document.querySelector(".startBtn");
var mainQuizSection = document.querySelector(".quizSection");


var deleteStartBtn = function() {
    startButtonEl.remove();
    console.log("Success");
    spawnQuestion();
    spawnAnswer();
}

var questionA = {
    question: "Insert question here?",
    answer1: "A",
    answer2: "B",
    answer3: "C",
    answer4: "D"
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

    var answerOne = document.createElement("button");
    answerOne.className = "answerButton";
    answerOne.innerHTML = questionA.answer1;
    answerContainerEl.appendChild(answerOne);

    var answerTwo = document.createElement("button");
    answerTwo.className = "answerButton";
    answerTwo.innerHTML = questionA.answer2;
    answerContainerEl.appendChild(answerTwo);

    var answerThree = document.createElement("button");
    answerThree.className = "answerButton";
    answerThree.innerHTML = questionA.answer3;
    answerContainerEl.appendChild(answerThree);

    var answerFour = document.createElement("button");
    answerFour.className = "answerButton";
    answerFour.innerHTML = questionA.answer4;
    answerContainerEl.appendChild(answerFour);

    mainQuizSection.appendChild(answerContainerEl);


}

startButtonEl.addEventListener('click', deleteStartBtn);