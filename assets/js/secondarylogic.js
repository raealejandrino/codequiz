// Get localStorage data and create list element with corresponding data

var orderedList = document.querySelector(".scoreOrdered");

var getData = function() {
    var savedScores = localStorage.getItem("scores");

    if (!savedScores) {
        return false;
    }

    savedScores = JSON.parse(savedScores);

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

