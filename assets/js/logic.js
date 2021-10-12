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

var questionD = {
    question: "Insert question here**",
    answer1: "M",
    answer2: "N",
    answer3: "O",
    answer4: "P"
};

var questionsArray = [questionA, questionB, questionC, questionD];


var randomNumber = function() {
    var value = Math.floor(Math.random() * questionsArray.length);
    return value
};

var timer = 75;

var randomId = randomNumber();

var deleteStartBtn = function() {
     // TIMER FUNCTION
     var countdown = function() {
        var timerNum = document.querySelector(".timer");
        timerNum.innerHTML = timer;
        timer--;
            if(timer === 0 || questionsArray.length < 1) {
                console.log("end");
                clearInterval(startCountdown);
                endGame();
        
            };
    };

    var startCountdown = setInterval(countdown, 1000);
    startButtonEl.remove();
    
    console.log("Success");
    
    console.log(randomId);
    
    spawnQuestion(randomId);
    spawnAnswer(randomId);
    
  
    

    
}










// create question with next button

var spawnQuestion = function(randomId) {
    console.log(questionsArray);
    // create, fill in content, append
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "quizQuestion";
    questionContainerEl.innerHTML = "<h1 class='question'>" + questionsArray[randomId].question + "</h1>";
    questionContainerEl.setAttribute("data-question-id", randomId);
    mainQuizSection.appendChild(questionContainerEl);

   

    var quizCheckerEl = document.createElement("div");
    quizCheckerEl.className = "quizChecker";

}

var spawnAnswer = function(randomId) {
    var answerContainerEl = document.createElement("div");
    answerContainerEl.className = "quizAnswer";

    var answerOne = document.createElement("button");
    answerOne.className = "answerButton1";
    answerOne.innerHTML = questionsArray[randomId].answer1;
    answerContainerEl.appendChild(answerOne);

    var answerTwo = document.createElement("button");
    answerTwo.className = "answerButton2";
    answerTwo.innerHTML = questionsArray[randomId].answer2;
    answerContainerEl.appendChild(answerTwo);

    var answerThree = document.createElement("button");
    answerThree.className = "answerButton3";
    answerThree.innerHTML = questionsArray[randomId].answer3;
    answerContainerEl.appendChild(answerThree);

    var answerFour = document.createElement("button");
    answerFour.className = "answerButton4";
    answerFour.innerHTML = questionsArray[randomId].answer4;
    answerContainerEl.appendChild(answerFour);

    console.log(questionsArray[randomId].question);

    if (questionsArray[randomId].question === questionA.question ) {
        answerOne.setAttribute("data-special-answer", 5);
    } 
    else if (questionsArray[randomId].question === questionB.question) {
        answerTwo.setAttribute("data-special-answer", 5);
    }
    else if (questionsArray[randomId].question === questionC.question) {
        answerThree.setAttribute("data-special-answer", 5);
    }
    else  {
        answerFour.setAttribute("data-special-answer", 5);
    }

    mainQuizSection.appendChild(answerContainerEl);

    

    answerOne.addEventListener("click", deleteCurrentQuestion);
    answerTwo.addEventListener("click", deleteCurrentQuestion);
    answerThree.addEventListener("click", deleteCurrentQuestion);
    answerFour.addEventListener("click", deleteCurrentQuestion);
}

var deleteCurrentQuestion = function(event) {
    var randomId = randomNumber();
    var questionContainerEl = document.querySelector(".quizQuestion");
    console.log(randomId);
    if (randomId !== questionContainerEl.getAttribute("data-question-id")) {
        randomId = questionContainerEl.getAttribute("data-question-id")
    }

    var targetEl = event.target;

    if (!targetEl.hasAttribute("data-special-answer")) {
        timer -= 5;
    }

    



    console.log(targetEl);
    // console.log(questionContainerEl.getAttribute("data-question-id"));
    // console.log(randomId);
    var currentQuestion = document.querySelector(".quizQuestion");
    var currentAnswer = document.querySelector (".quizAnswer");

    if (questionsArray.length < 1) {
        
        currentQuestion.remove();
        currentAnswer.remove();
        endGame();
        
    }


    questionsArray.splice(randomId, 1);
    // console.log(questionsArray);
    var randomId = randomNumber();
    currentQuestion.remove();
    currentAnswer.remove();
    console.log(randomId);
    spawnQuestion(randomId);
    spawnAnswer(randomId);
}

// endgame creation function

var endGame = function() {
    var finishLine = document.createElement("div");
    finishLine.className = "Finish";

    var allDone = document.createElement("h1");
    allDone.className = "question";
    allDone.innerHTML = "All Done!";
    finishLine.appendChild(allDone);

    var finalScoreStatement = document.createElement("h3");
    finalScoreStatement.className = "scoreStatement";
    finalScoreStatement.innerHTML = "Your final score is " + timer + " .";
    finishLine.appendChild(finalScoreStatement);

    var initialSubmission = document.createElement("div");
    initialSubmission.className = "initialSub";
    initialSubmission.innerHTML = "<h3>Enter initials:</h3><input type='text' name='initials' /><button id='save-initial'>Submit</button>";
    finishLine.appendChild(initialSubmission);

    mainQuizSection.appendChild(finishLine);
}



startButtonEl.addEventListener('click', deleteStartBtn);

    