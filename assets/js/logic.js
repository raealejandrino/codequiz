var startButtonEl = document.querySelector(".startBtn");
var mainQuizSection = document.querySelector(".quizSection");




var questionA = {
    question: "Insert question here?",
    answer1: "A",
    answer2: "B",
    answer3: "C",
    answer4: "D"
};


var questionB = {
    question: "Insert question here!!",
    answer1: "E",
    answer2: "F",
    answer3: "G",
    answer4: "H"
};

var questionC = {
    question: "Insert question here##",
    answer1: "I",
    answer2: "J",
    answer3: "K",
    answer4: "L"
};

var questionsArray = [questionA, questionB, questionC];

var deleteStartBtn = function() {
    startButtonEl.remove();
    
    console.log("Success");
    var randomId = randomNumber();
    console.log(randomId);
    spawnQuestion(randomId);
    spawnAnswer(randomId);
    

    
}

// function to generate a random numeric value

var randomNumber = function() {
    var value = Math.floor(Math.random() * questionsArray.length);
    return value
};


// create question with next button

var spawnQuestion = function(randomId) {
    console.log(questionsArray);
    // create, fill in content, append
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "quizQuestion";
    questionContainerEl.innerHTML = "<h1 class='question'>" + questionsArray[randomId].question + "</h1>";
    mainQuizSection.appendChild(questionContainerEl);

   

    var quizCheckerEl = document.createElement("div");
    quizCheckerEl.className = "quizChecker";

}

var spawnAnswer = function(randomId) {
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

    

    answerOne.addEventListener("click", deleteCurrentQuestion(randomId));
    // answerTwo.addEventListener("click", deleteCurrentQuestion(randomId));
    // answerThree.addEventListener("click", deleteCurrentQuestion(randomId));
    // answerFour.addEventListener("click", deleteCurrentQuestion(randomId));
}

var deleteCurrentQuestion = function(randomId) {
    var currentQuestion = document.querySelector(".quizQuestion");
    var currentAnswer = document.querySelector (".quizAnswer");
    questionsArray.splice(randomId, 1);
    var randomId = randomNumber();
    currentQuestion.remove();
    currentAnswer.remove();
    spawnQuestion(randomId);
    spawnAnswer(randomId);
}



startButtonEl.addEventListener('click', deleteStartBtn);

    