document.addEventListener('DOMContentLoaded',() => {

  //DEFINE ALL VARIABLES//

  //Dice Sound//
  const dice = document.querySelector('.dice')
  console.log('dice',dice)

  //Dice Rolling & Dice Landing on Random Number//

  //Animate Drake Intro Header//
  const animateDrakeImg =  document.querySelector('.animate-drakeintro')
  animateDrakeImg.classList.add('animated', 'bounceInUp')
  const animateDrakeH1 =  document.querySelector('.animate-drakeintroh1')
  animateDrakeH1.classList.add('animated', 'bounceInRight')

  //DEFINE EVENT LISTENERS//

  //Dice Sound//
  dice.addEventListener('click', playDice)

  //Dice Rolling//
  // dice.addEventListener('click', diceRoll)

  //Dice Landing on Random Number//

  //DEFINE ASSOCIATED FUNCTIONS//
  //Dice Sound//
  function playDice (){
    const diceSound = document.querySelector('#diceaudio')
    console.log('diceSound',diceSound)
    diceSound.play()
  }
  //   //Dice Rolling//
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
