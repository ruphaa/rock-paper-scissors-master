let userDisplay = document.querySelector("#user");
let houseDisplay = document.querySelector("#house");
let result = document.querySelector("#result");
let signs = document.querySelectorAll(".sign");
let gameSigns = document.querySelector(".game-signs");
let pickedSigns = document.querySelector(".picked-signs");
let resultBoard = document.querySelector(".result");
let replay = document.querySelector("#replay");
let scoreBoard = document.querySelector("#score");
let rules = document.querySelector(".rules");
let modal = document.querySelector(".rule-board");
let overlay = document.querySelector(".modal-overlay");
let close = document.querySelector(".close");
let score = 0;
let userChoice;
let houseChoice;

// Attach Events
signs.forEach((sign) =>
  sign.addEventListener("click", (e) => {
    userChoice = e.currentTarget.id;
    let randomNumber = Math.round(Math.random() * 5);
    if (randomNumber == 0) randomNumber = 4;
    randomHouseValue(randomNumber);
    gameSigns.classList.add("hide");
    pickedSigns.classList.remove("hide");
    userDisplay.innerHTML = renderSelectedChoice(userChoice);
    houseDisplay.innerHTML = renderSelectedChoice(houseChoice);
    result.innerHTML = getResults();
    if (result.innerHTML.trim() == "you win") {
      userDisplay.classList.add("win");
    } else if (result.innerHTML.trim() == "you lose") {
      houseDisplay.classList.add("win");
    }
    scoreBoard.innerHTML = score;
    resultBoard.classList.remove("hide");
  })
);

replay.addEventListener("click", (e) => {
  resetGame();
});

rules.addEventListener("click", (e) => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

close.addEventListener("click", (e) => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

const resetGame = () => {
  gameSigns.classList.remove("hide");
  pickedSigns.classList.add("hide");
  resultBoard.classList.add("hide");
  userDisplay.classList.remove("win");
  houseDisplay.classList.remove("win");
};

// Get a random house' choice
const randomHouseValue = (randomNumber) => {
  if (randomNumber === 1) {
    houseChoice = "rock";
  } else if (randomNumber === 2) {
    houseChoice = "paper";
  } else if (randomNumber === 3) {
    houseChoice = "scissors";
  } else if (randomNumber === 4) {
    houseChoice = "spock";
  } else if (randomNumber === 5) {
    houseChoice = "lizard";
  }
};

// Get selected DOM
const renderSelectedChoice = (choice) => {
  return `<div class="chosen ${choice}" id="${choice}">
              <img src="images/icon-${choice}.svg" alt="" />
            </div>`;
};

// Get results based on rules
const getResults = () => {
  if (userChoice == houseChoice) {
    return "Tie";
  } else if (userChoice == "rock" && houseChoice == "paper") {
    score--;
    return "you lose";
  } else if (userChoice == "rock" && houseChoice == "scissors") {
    score++;
    return "you win";
  } else if (userChoice == "rock" && houseChoice == "lizard") {
    score++;
    return "you win";
  } else if (userChoice == "rock" && houseChoice == "spock") {
    score--;
    return "you lose";
  } else if (userChoice == "lizard" && houseChoice == "rock") {
    score--;
    return "you lose";
  } else if (userChoice == "lizard" && houseChoice == "paper") {
    score++;
    return "you win";
  } else if (userChoice == "lizard" && houseChoice == "scissors") {
    score--;
    return "you lose";
  } else if (userChoice == "lizard" && houseChoice == "spock") {
    score++;
    return "you win";
  } else if (userChoice == "spock" && houseChoice == "rock") {
    score++;
    return "you win";
  } else if (userChoice == "spock" && houseChoice == "paper") {
    score--;
    return "you lose";
  } else if (userChoice == "spock" && houseChoice == "scissors") {
    score++;
    return "you win";
  } else if (userChoice == "spock" && houseChoice == "lizard") {
    score--;
    return "you lose";
  } else if (userChoice == "scissors" && houseChoice == "rock") {
    score--;
    return "you lose";
  } else if (userChoice == "scissors" && houseChoice == "paper") {
    score++;
    return "you win";
  } else if (userChoice == "scissors" && houseChoice == "lizard") {
    score++;
    return "you win";
  } else if (userChoice == "scissors" && houseChoice == "spock") {
    score--;
    return "you lose";
  } else if (userChoice == "paper" && houseChoice == "rock") {
    score++;
    return "you win";
  } else if (userChoice == "paper" && houseChoice == "scissors") {
    score--;
    return "you lose";
  } else if (userChoice == "paper" && houseChoice == "lizard") {
    score--;
    return "you lose";
  } else if (userChoice == "paper" && houseChoice == "spock") {
    score++;
    return "you win";
  }
};
