document.addEventListener('DOMContentLoaded',() => {

  //DEFINE ALL VARIABLES//

  //Dice Sound//
  const dice = document.querySelector('.dice')
  console.log('dice',dice)

  //Dice Rolling & Dice Landing on Random Number//
  const die1 = document.querySelector('#die1')
  const status = document.querySelector('#status')

  //Player movement on board after dice roll//
  let playerPosition = 99
  let compPosition = 99

  //Define Ladder for Movement and Placement//
  const ladder = 96
  //Define Snake for Movement and Placement//
  const snake = 76

  //Animate Drake Intro Header//
  const animateDrakeImg =  document.querySelector('.animate-drakeintro')
  animateDrakeImg.classList.add('animated', 'bounceInUp')

  const animateDrakeH1 =  document.querySelector('.animate-drakeintroh1')
  animateDrakeH1.classList.add('animated', 'bounceInRight')

  //Animate Snake and Ladder Images, Intro//
  // const animateLadder
  // const animateSnake

  //DEFINE EVENT LISTENERS//

  //Dice Sound & producing a random number//
  dice.addEventListener('click', playDice)

  //DEFINE ASSOCIATED FUNCTIONS//
  alert('Which Drake Would You Like to Be?')
  //Intro to Game: Player Choice Window//
  function ladderMove() {
    if(playerPosition === 96 || compPosition === 96) {
      alert('You go up!')

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
  $squares.eq(compPosition).addClass('drake-player2')
  $squares.eq(ladder).addClass('ladder-test')
  $squares.eq(snake).addClass('snake-test')

  // Adds a class of Drake to current position
  function playerMoving() {
    $squares.removeClass('drake-player1')
    $squares.eq(playerPosition).addClass('drake-player1')
  }
  function compMoving() {
    $squares.removeClass('drake-player2')
    $squares.eq(compPosition).addClass('drake-player2')
  }
  //Function for Moving up a Ladder//
  function ladderMove() {
    if(playerPosition === 96 || compPosition === 96) {
      alert('You go up!')
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(73).addClass('drake-player1')
      $squares.eq(73).addClass('drake-player2')
    }
  }
  function snakeMove() {
    if(playerPosition === 76 || compPosition === 76) {
      alert('You go down. Sad face.')
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(95).addClass('drake-player1')
      $squares.eq(95).addClass('drake-player2')
    }
  }
  //function for checking winner, setting the win condition//
  function checkWinner() {
    if(playerPosition <= 0) {
      alert('Player 1 Wins!')
    } else if(compPosition <= 0) {
      alert('Computer Wins!')
    }
  }

  //Dice Sound & producing a random number//
  function playDice (){
    const diceSound = document.querySelector('.diceaudio')
    // console.log('diceSound',diceSound)
    diceSound.play()
    const d1 = rollDice()
    const d2 = rollDice()
    console.log('player rolled', d1)
    console.log('computer rolled', d2)
    playerPosition -= d1
    compPosition -= d2
    die1.innerHTML = d1
    status.innerHTML = 'You rolled '+d1+'.'
    if(d1 === 6 || d2 === 6) {
      status.innerHTML += 'Reppn the 6ix! Roll again!'
    }
    playerMoving()
    setTimeout(() => compMoving(), 4000)
    checkWinner()
    ladderMove()
    snakeMove()

    function rollDice() {
      return Math.floor(Math.random() * 6) + 1
    }
  }
})


// Dice Landing on Random Number Animation//

//   //callback	Optional. A function to be executed after the animation completes. To learn more about callback, please read our jQuery Callback chapter//*Use for triggering random dice number*
// }
