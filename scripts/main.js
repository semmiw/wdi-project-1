document.addEventListener('DOMContentLoaded',() => {

  //DEFINE ALL VARIABLES//

  //Dice Sound//
  const dice = document.querySelector('.dice')
  console.log('dice',dice)

  //Dice Rolling & Dice Landing on Random Number//
  // const die1 = document.getElementById('#die1')
  // const status = document.getElementById('#status')
  const die1 = document.querySelector('#die1')
  const status = document.querySelector('#status')

  //Animate Drake Intro Header//
  const animateDrakeImg =  document.querySelector('.animate-drakeintro')
  animateDrakeImg.classList.add('animated', 'bounceInUp')

  const animateDrakeH1 =  document.querySelector('.animate-drakeintroh1')
  animateDrakeH1.classList.add('animated', 'bounceInRight')

  //DEFINE EVENT LISTENERS//

  //Dice Sound//
  dice.addEventListener('click', playDice)

  //Dice Rolling & Landing on a Random Number//
  // die1.addEventListener('click', rollDice)

  //DEFINE ASSOCIATED FUNCTIONS//

  //Dice Sound//
  function playDice (){
    const diceSound = document.querySelector('.diceaudio')
    // console.log('diceSound',diceSound)
    diceSound.play()

    const d1 = Math.floor(Math.random() * 6) + 1
    const diceTotal = d1
    die1.innerHTML = d1
    status.innerHTML = 'You rolled '+diceTotal+'.'
    if(d1 === 6) {
      status.innerHTML += 'Reppn the 6ix! Roll again!'
    }
  }


  //Dice Rolling & Landing on Random Number//

  // function rollDice() {
  //   const d1 = Math.floor(Math.random() * 6) + 1
  //   const diceTotal = d1
  //   die1.innerHTML = d1
  //   status.innerHTML = 'You rolled '+diceTotal+'.'
  //   if(d1 === 6) {
  //     status.innerHTML += 'Reppn the 6ix! Roll again!'
  //   }




  //   function diceRoll () {
  //   const diceRoll = document.querySelector('#')
  //   diceRoll.
  //   //callback	Optional. A function to be executed after the animation completes. To learn more about callback, please read our jQuery Callback chapter//*Use for triggering random dice number*
  // }
  //   //Dice Landing on Random Number//

})


// const diceSound = document.querySelector('#diceaudio')
// diceSound.src = 'Sounds/Rolldicesound.wav'
// dice.addEventListener('click',() => {
//   diceSound.play()
// })
