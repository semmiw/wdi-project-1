document.addEventListener('DOMContentLoaded',() => {

  //DEFINE ALL VARIABLES//

  //Dice Sound//
  const dice = document.querySelector('.dice')
  console.log('dice',dice)

  //Dice Rolling & Dice Landing on Random Number//
  const die1 = document.querySelector('#die1')
  const status = document.querySelector('#status')

  //Image pop-up after every dice roll click//
  // const dieRollDrakeImage = document.querySelector('.dieRollDrake')

  // const dieDrakePop = document.querySelector('.dieRollDrake')

  //Player movement on board after dice roll//
  let playerPosition = 98
  let compPosition = 98

  //Define Ladder for Movement and Placement//
  const ladder1 = 96
  const ladder2 = 23
  const ladder3 = 16
  const ladder4 = 86
  const ladder5 = 66
  const ladder6 = 56
  const ladder7 = 36
  const ladder8 = 73

  //Define Snake for Movement and Placement//
  const snake1 = 76
  const snake2 = 1
  const snake3 = 10
  const snake4 = 5
  const snake5 = 19
  const snake6 = 29
  const snake7 = 70
  const snake8 = 34

  //Define snake sound//
  const snakeSound = document.querySelector('.snakeaudiosquare')

  //Define ladder sound//
  const ladderSound = document.querySelector('.ladderaudiosquare')

  //Animate Drake Intro Header//
  // const animateDrakeImg =  document.querySelector('.animate-drakeintro')
  // animateDrakeImg.classList.add('animated', 'bounceInUp')

  const animateDrakeH1 =  document.querySelector('.animate-drakeintroh1')
  animateDrakeH1.classList.add('animated', 'bounceInUp')

  //Animate Game Board Intro//

  const animateGameB = document.querySelector('.board-game-container')
  animateGameB.classList.add('animated', 'bounceInUp')

  //DEFINE EVENT LISTENERS//

  //Dice Sound & producing a random number//
  dice.addEventListener('click', playDice)
  // dice.addEventListener('click', dieDrakePop)

  //DEFINE ASSOCIATED FUNCTIONS//
  // function dieDrakePop() {
  //   dieRollDrakeImage.show(3000)

  // // Can pass in function name
  // $('.dice').click(dieDrakePop)

  //Game Board Grid//
  const $gameBoard = $('.board-game-container')
  const numTiles = 99
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
  $squares.eq(ladder1).addClass('ladder-test')
  $squares.eq(ladder2).addClass('ladder-test')
  $squares.eq(ladder3).addClass('ladder-test')
  $squares.eq(ladder4).addClass('ladder-test')
  $squares.eq(ladder5).addClass('ladder-test')
  $squares.eq(ladder6).addClass('ladder-test')
  $squares.eq(ladder7).addClass('ladder-test')
  $squares.eq(ladder8).addClass('ladder-test')
  $squares.eq(snake1).addClass('snake-test')
  $squares.eq(snake2).addClass('snake-test')
  $squares.eq(snake3).addClass('snake-test')
  $squares.eq(snake4).addClass('snake-test')
  $squares.eq(snake5).addClass('snake-test')
  $squares.eq(snake6).addClass('snake-test')
  $squares.eq(snake7).addClass('snake-test')
  $squares.eq(snake8).addClass('snake-test')
  // Adds a class of Drake to current position
  function playerMoving() {
    console.log('playerMoving')
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
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(73).addClass('drake-player1')
      $squares.eq(73).addClass('drake-player2')
    }
    //ladder2//
    if(playerPosition === 23 || compPosition === 23) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(4).addClass('drake-player1')
      $squares.eq(4).addClass('drake-player2')
    }
    //ladder3//
    if(playerPosition === 16 || compPosition === 16) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(7).addClass('drake-player1')
      $squares.eq(7).addClass('drake-player2')
    }
    //ladder4//
    if(playerPosition === 86 || compPosition === 86) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(9).addClass('drake-player1')
      $squares.eq(9).addClass('drake-player2')
    }
    //ladder5//
    if(playerPosition === 66 || compPosition === 66) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(17).addClass('drake-player1')
      $squares.eq(17).addClass('drake-player2')
    }
    //ladder6//
    if(playerPosition === 56 || compPosition === 56) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(4).addClass('drake-player1')
      $squares.eq(4).addClass('drake-player2')
    }
    //ladder7//
    if(playerPosition === 36 || compPosition === 36) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(8).addClass('drake-player1')
      $squares.eq(8).addClass('drake-player2')
    }
    //ladder8//
    if(playerPosition === 73 || compPosition === 73) {
      alert('You go up!')
      ladderSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(32).addClass('drake-player1')
      $squares.eq(32).addClass('drake-player2')
    }
  }
  function snakeMove() {
    if(playerPosition === 76 || compPosition === 76) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(95).addClass('drake-player1')
      $squares.eq(95).addClass('drake-player2')
    }
    //snake2//
    if(playerPosition === 1 || compPosition === 1) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(25).addClass('drake-player1')
      $squares.eq(25).addClass('drake-player2')
    }
    //snake3//
    if(playerPosition === 10 || compPosition === 10) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(40).addClass('drake-player1')
      $squares.eq(40).addClass('drake-player2')
    }
    //snake4//
    if(playerPosition === 5 || compPosition === 5) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(60).addClass('drake-player1')
      $squares.eq(60).addClass('drake-player2')
    }
    //snake5//
    if(playerPosition === 19 || compPosition === 19) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(51).addClass('drake-player1')
      $squares.eq(51).addClass('drake-player2')
    }
    //snake6//
    if(playerPosition === 29 || compPosition === 29) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(39).addClass('drake-player1')
      $squares.eq(39).addClass('drake-player2')
    }
    //snake7//
    if(playerPosition === 70 || compPosition === 70) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(85).addClass('drake-player1')
      $squares.eq(85).addClass('drake-player2')
    }
    //snake8//
    if(playerPosition === 34 || compPosition === 34) {
      alert('You go down. Sad face.')
      snakeSound.play()
      $squares.removeClass('drake-player1')
      $squares.removeClass('drake-player2')
      //and move to new square//
      $squares.eq(41).addClass('drake-player1')
      $squares.eq(41).addClass('drake-player2')
    }
  }
  //Check winner and set the main win condition//
  function checkWinner() {
    if(playerPosition <= 0) {
      alert('Player 1 Wins!')
    } else if(compPosition <= 0) {
      alert('Computer Wins!')
    }
  }

  //Function for Dancing Drake Image, appearing on click//

  //make invisible then visible with css//
  //make invisible then visible time interval//

  //Dice Sound & Random Number//
  function playDice() {
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1
    }
    const diceSound = document.querySelector('.diceaudio')
    // console.log('diceSound',diceSound)
    diceSound.play()
    const drakeDiceGif = document.querySelector('#dieRollDrakeAgain')
    drakeDiceGif.show()
    // $('#dieRollDrakeAgain').show(4000)
    const d1 = rollDice()
    const d2 = rollDice()
    console.log('player rolled', d1)
    console.log('computer rolled', d2)
    playerPosition -= d1
    compPosition -= d2
    die1.innerHTML = d1
    status.innerHTML = 'You rolled '+d1+'.'
    if(d1 === 6 || d2 === 6) {
      status.innerHTML = 'Reppn the 6ix!'
    }
    playerMoving()
    setTimeout(() => compMoving(), 2000)
    checkWinner()
    ladderMove()
    snakeMove()
  }
})

//callback	Optional. A function to be executed after the animation completes. To learn more about callback, please read our jQuery Callback chapter//*Use for triggering random dice number*
//
