// Get localStorage data and create list element with corresponding data
localStorage;


var orderedList = document.querySelector(".scoreOrdered");
var redirectButton = document.querySelector(".back");
var clearButton = document.querySelector(".clearScores");


var getData = function() {
    var savedScores = localStorage.getItem("scores");

    if (!savedScores) {
        return false;
    }

    
    savedScores = JSON.parse(savedScores);
    
    // Function that uses sort method to compare which elements are higher/lower than other elements in array
    var rearrangeScores = function() {
        savedScores.sort(function(a, b){return b.score - a.score});
    };
    
    // Readjust array to make it highest to lowest scores

    rearrangeScores();
    console.log(savedScores);


    for (var i=0; i < savedScores.length; i++) {
        createListEl(savedScores[i]);

    }


};

var createListEl = function(scoreObj) {
    var listEl = document.createElement("li");
    listEl.className = "listScore";
    listEl.innerHTML = scoreObj.name + " - " + scoreObj.score;

    orderedList.appendChild(listEl);


};


getData();




// function to bring back to quiz page

var redirectPage = function() {
    window.location.href = "./index.html";
};

// clear high scores

var clearScores = function() {
    localStorage.clear();
    orderedList.remove();
};

clearButton.addEventListener("click", clearScores);
redirectButton.addEventListener("click", redirectPage);



