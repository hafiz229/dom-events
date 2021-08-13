function makeRed() {
  document.body.style.backgroundColor = "red";
}

// handle blue button click by setting function name
const blueButton = document.getElementById("blue-button");
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// handle event using anonymous functiton
const greenButton = document.getElementById("green-button");
greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// handle event using addEventListener
const orangeButton = document.getElementById("orange-button");
orangeButton.addEventListener("click", makeOrange);

function makeOrange() {
  document.body.style.backgroundColor = "orange";
}

// addEventListener with anonymous function
const hotPinkButton = document.getElementById("hot-pink-button");
hotPinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotPink";
});

// addEventListener direcly without using any function
document.getElementById("light-blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightBlue";
});
