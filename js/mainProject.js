
const options = [ 'rock', 'paper', 'scissors' ];

const winner = ( user, comp ) => {  
        if (user === comp) return "It's a tie!";  
        else if ((user === 'rock' && comp === 'scissors') || 
                (user === 'scissors' && comp === 'paper') ||  
                (user === 'paper' && comp === 'rock')) return `${user} beats ${comp}`;   
        else return `${comp} beats ${user}`;    
};

const computerPlay = ( arr ) => {
    return arr[ Math.floor( Math.random() * arr.length) ]
}

const gameRound = () => {
    const playerSelection = prompt("Choose an option")
    const computerSelection = computerPlay(options);
    console.log("Computer Chose: " + computerSelection)
    return (winner(playerSelection, computerSelection));
}

const playGame = () => {
    let  roundCount = 5;
    for(let i = 1; i <= roundCount; i++){
        const result = gameRound();
        console.log(result)
        if( result === "It's a tie!"){
            roundCount++;
        }
    }
    console.log("Total rounds: " + roundCount)
}

playGame();
