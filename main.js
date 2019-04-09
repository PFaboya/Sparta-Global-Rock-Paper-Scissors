alert("You must defend your honour against the computer in the ancient art of Rock-Paper-Scissors, I wish you a glorious victory")

var yourHand = prompt("choose rock, paper or scissors")

if (yourHand == "rock" || yourHand == "paper" || yourHand == "scissors"){
  var computerNum = Math.random();
}

if(computerNum <= 1 / 3){
  var computerHand = "rock";
} else if(computerNum > 1/3 && computerNum <= 2/3){
  var computerHand = "paper";
} else if(computerNum > 2/3){
  var computerHand = "scissors";
}

// winning hand
if( yourHand == "rock" && computerHand == "scissors"){
  var roundResult = "win"
  alert("computer has chosen scissors")
  alert(roundResult)
  alert("You have brought honour to your family and won one point");
}

if( yourHand == "paper" && computerHand == "rock"){
  var roundResult = "win"
  alert("computer has chosen rock")
  alert(roundResult)
  alert("You have brought honour to your family and won one point");
}

if( yourHand == "scissors" && computerHand == "paper"){
  var roundResult = "win"
  alert("computer has chosen paper")
  alert(roundResult)
  alert("You have brought honour to your family and won one point");
}

//losing hand
if( yourHand == "rock" && computerHand == "paper"){
  var roundResult = "lose"
  alert("computer has chosen paper")
  alert(roundResult)
  alert("Your life is filled with nothing but shame, beaten by a mere computer");
}

if( yourHand == "paper" && computerHand == "scissors"){
  var roundResult = "lose"
  alert("computer has chosen scissors")
  alert(roundResult)
  alert("Your life is filled with nothing but shame, beaten by a mere computer");
}

if( yourHand == "scissors" && computerHand == "rock"){
  var roundResult = "lose"
  alert("computer has chosen rock")
  alert(roundResult)
  alert("Your life is filled with nothing but shame, beaten by a mere computer");
}

//draw
if( yourHand == "rock" && computerHand == "rock"){
  var roundResult = "draw"
  alert("computer has also chosen rock")
  alert(roundResult)
  alert("In the heated battle you have both come out equal");
}

if( yourHand == "paper" && computerHand == "paper"){
  var roundResult = "draw"
  alert("computer has also chosen paper")
  alert(roundResult)
  alert("In the heated battle you have both come out equal");
}

if( yourHand == "scissors" && computerHand == "scissors"){
  var roundResult = "draw"
  alert("computer has also chosen scissors")
  alert(roundResult)
  alert("In the heated battle you have both come out equal");
}

function yourPoints(playerScore){
  for (var i = 0; i < array.length; i++) {
    if (roundResult == "win"){
      playerScore = playerScore + 1;
      totalScore = playerScore;
    }
  }
  return yourPoints
}

alert(playerScore)

// function computerPoints(comScore){}

// if(roundResult = "win" && yourPoints < 3 && computerPoints < 3){
//   yourPoints = yourPoints + 1;
// }
// alert(yourPoints);
// if(roundResult = "win"){
//   yourPoints = yourPoints + 1;
//   alert(yourPoints)
// }
