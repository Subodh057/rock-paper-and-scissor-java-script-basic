let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
}

const drawGame = () => {
    console.log("Game was Draw!, Play Again");
    msg.innerText = "Game was Draw!, Play Again";
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!, play again");
        msg.innerText = "You win!, play again";
        user_score.innerText=++userScore;
        
    } else {
        console.log("You lose!, play again");
        msg.innerText = "You lose!, play again";
        comp_score.innerText=++compScore;
    }
}

const playGame = (userChoice) => {
    console.log("userChoice=", userChoice);
    const compChoice = getCompChoice();
    console.log("compChoice=", compChoice);

    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = true;

    if (userChoice === "rock") {
        userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else {
        userWin = compChoice === "paper";
    }

    showWinner(userWin);
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
