const divider = 2
const startMoney = 100
const startMaxNumber = 8
const startAttempts = 3
const numberMultiplier = 4
const roundNumber = 3
const rouletteMultiplier = 2
let playerPrize = 100
let attempts = 3
let maxNumber = 8
let minNumber = 0
let playersMoney = 0
let counter = 1
let quitGame = true

let wantToPlay = confirm('Do you want to play game?') 
for(; quitGame ;){
  if(wantToPlay === true){
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1 - 0)+ 0);
      
    for( let round = 0; quitGame || round <= roundNumber; round++ ){
      if(attempts === 0){
        playersMoney = 0
        alert('Thank you for your participation. Your prize is: '+ playersMoney +'$’')
        let wantToPlayAgain = confirm('Do you want to play a game again?')
        
        if(wantToPlayAgain){
          counter = 1
          attempts = startAttempts
          maxNumber = startMaxNumber
          playerPrize = startMoney
          break
        } else {
          quitGame = false
          break          
        }
      }
      
      let messageToUser = 'Choose a roulette pocket number from' + minNumber + ' to ' + maxNumber + '\n' 
                          + 'Attempts left:' + attempts +'\n' 
                          + 'Total prize:' + playersMoney + '$\n'
                          + 'Possible prize on current attempt:' + playerPrize + '$\n';
      let playerAnswer = +prompt( messageToUser )
      
      if( randomNumber !== playerAnswer ){
        attempts--
        playerPrize = playerPrize / divider
      } else {
        playersMoney += playerPrize
        counter *= rouletteMultiplier
        alert('Thank you for your participation. Your prize is: '+ playersMoney +'$')
        break
      }
    } 
    } else {
    alert('You did not become a billionaire, but can.')
    break
  }

  if(counter > 1){
    playerPrize = startMoney
    attempts = startAttempts
    maxNumber += numberMultiplier
    playerPrize *= counter
  }
}
