function getComputerChoice(){
    const options=["rock","paper","scissors"];
    return options [Math.floor(Math.random() *options.length)];
}
    let humanScore = 0;
    let computerScore = 0;

    const scoreDiv = document.getElementById("score");
    const roundResultDiv = document.getElementById("roundResult");

function playRound(humanChoice){
    const computerChoice=getComputerChoice();
    let resultMsg = `You chose ${humanChoice} and computer chose ${computerChoice}. `;

    if(humanChoice===computerChoice){
        resultMsg += "It's a tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")){
                    humanScore++;
                    resultMsg += " You win this round ";
            }
      else{
            computerScore++;
            resultMsg += " Computer wins this round ";
                }      
               scoreDiv.textContent =  `The Scores: You(${humanScore}) : Computer(${computerScore})`;
               roundResultDiv.textContent = resultMsg;

                if(humanScore===5 || computerScore===5){
                    announceWinner();
                }
            }

    function announceWinner(){
        const winnerMsg = 
         humanScore ===5 
                ? "Congratulation! You win the game !!" 
                : "Computer wins the game! HAHAHAHAHA" ;

                roundResultDiv.textContent=winnerMsg;

                document.querySelectorAll("button").forEach(button => {
                    button.disabled=true;
                });
    }
    

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));