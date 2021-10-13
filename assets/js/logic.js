

// GLOBAL VARIABLES

var startButtonEl = document.querySelector(".startBtn");
var startContent = document.querySelector("#startCont");
var mainQuizSection = document.querySelector(".quizSection");
var quizCheckSection = document.querySelector(".quizCheck");


// Global array variable to store player initials and session score object
var arrStor = [];


// Quiz question w/ answer objects

var questionA = {
    question: "Commonly used data types DO Not Include:",
    answer1: "alerts",
    answer2: "strings",
    answer3: "numbers",
    answer4: "booleans"
};


var questionB = {
    question: "The condition in an if / else statement is enclosed with _____.",
    answer1: "quotes",
    answer2: "parenthesis",
    answer3: "curly brackets",
    answer4: "square brackets"
};

var questionC = {
    question: "String values must be enclosed within _____ when being assinged to variables.",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parenthesis"
};

var questionD = {
    question: "Arrays in JavaScript can be used to store _____.",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above"
};

var questionsArray = [questionA, questionB, questionC, questionD];

// Quiz timer global variable 
var timer = 5;

// Random number function (used to determine random quiz question)
var randomNumber = function() {
    var value = Math.floor(Math.random() * questionsArray.length);
    return value
};


// Declare variable for random question selector function
var randomId = randomNumber();


// Function to begin quiz when clicking start

var deleteStartBtn = function() {

     // TIMER FUNCTION
     var countdown = function() {
        // Set the timer on the html page to actual timer variable value
        var timerNum = document.querySelector(".timer");
        timerNum.innerHTML = timer;
        timer--;

            if(timer === 0 || questionsArray.length < 1) {
                clearInterval(startCountdown);

                // Run endgame function
                endGame();
        
            };

            
    };

    // Initialize countdown
    var startCountdown = setInterval(countdown, 1000);

    // Remove start page elements
    startButtonEl.remove();
    startContent.remove();
    

    // Spawn in quiz question elements
    spawnQuestion(randomId);
    spawnAnswer(randomId);
};


// Function to create randomly selected question 

var spawnQuestion = function(randomId) {
    
    // Creating question element with special data id
    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "quizQuestion";
    questionContainerEl.innerHTML = "<h1 class='question'>" + questionsArray[randomId].question + "</h1>";
    questionContainerEl.setAttribute("data-question-id", randomId);
    mainQuizSection.appendChild(questionContainerEl);

};

// Function to create corresponding answers

var spawnAnswer = function(randomId) {

    // Creating container to put answer elements in
    var answerContainerEl = document.createElement("div");
    answerContainerEl.className = "quizAnswer";

    // First answer
    var answerOne = document.createElement("button");
    answerOne.className = "answerButton1";
    answerOne.innerHTML = questionsArray[randomId].answer1;
    answerContainerEl.appendChild(answerOne);

    // Second answer
    var answerTwo = document.createElement("button");
    answerTwo.className = "answerButton2";
    answerTwo.innerHTML = questionsArray[randomId].answer2;
    answerContainerEl.appendChild(answerTwo);

    // Third answer
    var answerThree = document.createElement("button");
    answerThree.className = "answerButton3";
    answerThree.innerHTML = questionsArray[randomId].answer3;
    answerContainerEl.appendChild(answerThree);

    // Fourth answer
    var answerFour = document.createElement("button");
    answerFour.className = "answerButton4";
    answerFour.innerHTML = questionsArray[randomId].answer4;
    answerContainerEl.appendChild(answerFour);

   
        // Hard coding to set which answer in correlation with it's question is the CORRECT answer by setting it's own special data id
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

    // Add answer container to quiz section
    mainQuizSection.appendChild(answerContainerEl);

    
    // event listeners to move onto next question on click
    answerOne.addEventListener("click", deleteCurrentQuestion);
    answerTwo.addEventListener("click", deleteCurrentQuestion);
    answerThree.addEventListener("click", deleteCurrentQuestion);
    answerFour.addEventListener("click", deleteCurrentQuestion);
}



// Function to remove current question elements and spawn next question
var deleteCurrentQuestion = function(event) {
    var randomId = randomNumber();
    var questionContainerEl = document.querySelector(".quizQuestion");
    
        // Matching the randomly generated Id to the current question Id
        if (randomId !== questionContainerEl.getAttribute("data-question-id")) {
            randomId = questionContainerEl.getAttribute("data-question-id")
        }

    // Declare variable on the button that was clicked 
    var targetEl = event.target;

        // Execute code based on right or wrong answer
        if (!targetEl.hasAttribute("data-special-answer")) {
            timer -= 5;
            quizCheckSection.innerHTML = "<h2>Wrong!</h2>";
            if (timer < 0) {
                timer = 0;
            }

        }
        else {
            quizCheckSection.innerHTML = "<h2>Correct!</h2>";
        }

    

    var currentQuestion = document.querySelector(".quizQuestion");
    var currentAnswer = document.querySelector (".quizAnswer");

        // If there are no more questions, remove current question and execute endgame function
        if (questionsArray.length < 1) {
            
            currentQuestion.remove();
            currentAnswer.remove();
            
            endGame();
            
        }

        // If there are more questions, remove current question and spawn new one
        if (questionsArray.length > 0) {
            
            // remove current question from questions array
            questionsArray.splice(randomId, 1);
        
            var randomId = randomNumber();
            currentQuestion.remove();
            currentAnswer.remove();
            
            // Spawn new question section
            spawnQuestion(randomId);
            spawnAnswer(randomId);
            
        }
};
    

// Function to execute once game ends (Either timer hits 0 or no more questions to answer)

var endGame = function() {
    // Remove whole quiz elements
    
    var quizQuestion = document.querySelector(".quizQuestion");
    var quizAnswer = document.querySelector(".quizAnswer");
        if (quizQuestion && quizAnswer) {
            quizQuestion.remove();
            quizAnswer.remove();
        }
    
    // Check to ensure timer is not -1
    if (timer < 0) {
        timer = 0;
    }
    
    quizCheckSection.remove();
    // Create endgame or submission layout
    var finishLine = document.createElement("div");
    finishLine.className = "Finish";

    // Header creation
    var allDone = document.createElement("h1");
    allDone.className = "question";
    allDone.innerHTML = "All Done!";
    finishLine.appendChild(allDone);

    // Sub header creation
    var finalScoreStatement = document.createElement("h3");
    finalScoreStatement.className = "scoreStatement";
    finalScoreStatement.innerHTML = "Your final score is " + timer + " .";
    finishLine.appendChild(finalScoreStatement);

    // Input with submission button creation
    var initialSubmission = document.createElement("div");
    initialSubmission.className = "initialSub";
    initialSubmission.innerHTML = "<h3>Enter initials:</h3><input type='text' name='initials' /><button id='save-initial'>Submit</button>";
    finishLine.appendChild(initialSubmission);
    
    // Add to page
    mainQuizSection.appendChild(finishLine);

    // Declare variable on the submit button, and add event listener for click to execute saveSubmission function
    var submissionButton = document.querySelector("#save-initial");
    submissionButton.addEventListener('click', saveSubmission);
};


// Function to execute on submitting initials on endgame screen
var saveSubmission = function(event) {

    // Get and declare value from initialSubmission elements
    var initialInput = document.querySelector("input[name='initials']").value;
    

    // Validating input from initial submission element
    if (!initialInput) {
        alert("You need to fill out your initials!");
        return false;
    }

    // Declare data object from player initials and session score
    var inputObj = {
        name: initialInput,
        score: timer
    };

    // Get the data to localStorage and redirect to high scores page
    toStorage(inputObj);
    window.location.href = "./secondary.html";
};


// push into array and save to storage

var toStorage = function(object) {
    arrStor.push(object);

    finalSave();
};

// to localStorage

var finalSave = function() {
    var retrievedScores = localStorage.getItem("scores");
    console.log(arrStor);
    if (!retrievedScores) {
        localStorage.setItem("scores", JSON.stringify(arrStor));
        return false;
    }
    console.log(arrStor);

    retrievedScores = JSON.parse(retrievedScores);
    console.log(retrievedScores);
    var newScorArr = retrievedScores.concat(arrStor);
    console.log(newScorArr);

    console.log(retrievedScores);
    localStorage.setItem("scores", JSON.stringify(newScorArr));
};


// Listen for click to begin quiz
startButtonEl.addEventListener('click', deleteStartBtn);

    