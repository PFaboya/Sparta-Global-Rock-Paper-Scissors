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

if( yourHand == "rock" && computerHand == "scissors"){
  alert("computer has chosen scissors")
  alert("You have brought honour to your family and won one point");
}

if( yourHand == "paper" && computerHand == "rock"){
  alert("computer has chosen rock")
  alert("You have brought honour to your family and won one point");
}

if( yourHand == "scissors" && computerHand == "paper"){
  alert("computer has chosen paper")
  alert("You have brought honour to your family and won one point");
}
