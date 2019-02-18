document.addEventListener('DOMContentLoaded',() => {

  //DEFINE ALL VARIABLES//

  //Dice Sound//
  const dice = document.querySelector('.dice')
  console.log('dice',dice)

  //Dice Rolling & Dice Landing on Random Number//
  const die1 = document.querySelector('#die1')
  const status = document.querySelector('#status')

  //Player movement on board after dice roll//
  // const player1moving = document.querySelector('.drake-player1')

  let playerPosition = 0

  //Animate Drake Intro Header//
  const animateDrakeImg =  document.querySelector('.animate-drakeintro')
  animateDrakeImg.classList.add('animated', 'bounceInUp')

  const animateDrakeH1 =  document.querySelector('.animate-drakeintroh1')
  animateDrakeH1.classList.add('animated', 'bounceInRight')

  //DEFINE EVENT LISTENERS//

  //Dice Sound & producing a random number//
  dice.addEventListener('click', playDice)

  //Player movement on board after dice roll//
  // player1moving.addEventListener('click', playerMoving)

  //DEFINE ASSOCIATED FUNCTIONS//

  //Game Board Grid//
  const $gameBoard = $('.board-game-container')
  const numTiles = 100
  function createBoard() {
    for (let i = 0; i<numTiles; i++){
      $gameBoard.append('<div class="square"></div>')
    }
    console.log($('board-game-container'))
  }
  createBoard()
  const $squares = $('.square')
  $squares.eq(playerPosition).addClass('drake-player1')

  // adds class of drake to current position
  function playerMoving() {
    $squares.removeClass('drake-player1')
    $squares.eq(playerPosition).addClass('drake-player1')
  }

  //Dice Sound & producing a random number//

  function playDice (){
    const diceSound = document.querySelector('.diceaudio')
    // console.log('diceSound',diceSound)
    diceSound.play()
    const d1 = Math.floor(Math.random() * 6) + 1
    const diceTotal = d1
    playerPosition += diceTotal
    die1.innerHTML = d1
    status.innerHTML = 'You rolled '+diceTotal+'.'
    if(d1 === 6) {
      status.innerHTML += 'Reppn the 6ix! Roll again!'
    }
    playerMoving()
  }
})

//Player movement on board after dice roll//
//icon moves according to number produced//
// Dice Landing on Random Number Animation//

//   //callback	Optional. A function to be executed after the animation completes. To learn more about callback, please read our jQuery Callback chapter//*Use for triggering random dice number*
// }
