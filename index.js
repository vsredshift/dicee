var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");


function declareWinner() {
  if (randomNumber1 > randomNumber2) {
    return "Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    return "Player 2 Wins!";
  }
  else {
    return "Draw!"
  }
}

document.querySelector('h1').innerHTML = declareWinner();
