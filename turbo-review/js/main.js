// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game(){
    let random = Math.floor(Math.random()*3)
    if (random < 1) {
        return ('rock')
    } else if (random < 2) {
        return('paper')
    } else if (random < 3) {
        return('scisors')
}
}



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function winOrLose(playerChoise) {
let botChoice = game()
  if (botChoice === 'rock' && playerChoise === 'paper') {
    console.log('Player Won')
  } else if (playerChoise === 'rock' && botChoice === 'scisors') { console.log('Player Won') } 
  else if (playerChoise === 'scisors' && botChoice === 'paper') { console.log('Player Won') } else {console.log('Player LOST')}
}

winOrLose('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
