let userscore = 0;
let compscore = 0;
let cntComp = 0;
let cntUser = 0;

const choices = document.querySelectorAll(".choice");
const mgsPara=document.querySelector("#msg");
const user=document.querySelector(".user");
const comp=document.querySelector(".comp");

const getCompChoices = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    // console.log("game was draw.");

    mgsPara.innerText="You draw the game !! Play Again ";
    mgsPara.style.backgroundColor="#081b31";
}

const showWinner = (userwin,userChoice,compChoice) => {
    
    if(userwin){
        
        // console.log("You Win !!");
        mgsPara.innerText=`You Won !! Your ${userChoice} beats ${compChoice}`;
       mgsPara.style.backgroundColor="green";
       cntUser++;
       user.innerText=cntUser;

    }
    else{
        
        // console.log("You Lose");
        mgsPara.innerText=`You Lose !! ${compChoice} beats your ${userChoice}`;
        mgsPara.style.backgroundColor="red";
        cntComp++;
        comp.innerText=cntComp;
    }
}
const playGame = (userChoice) => {
    // console.log("user Choice -> ", userChoice);
    //rock,paper,scissors
    const compChoice = getCompChoices();
    // console.log("computer Choice -> ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userwin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userwin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock,paper 
           userwin = compChoice === "rock" ? true :false;
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});