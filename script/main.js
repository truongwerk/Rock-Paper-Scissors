function computerPlay() {
  let min = 1;
  let max = 3;
  let hand = 0;
  let weapon = "none";
  min = Math.ceil(min);
  max = Math.floor(max);
  hand = Math.floor(Math.random() * (max - min + 1) + min);
  if (hand == 1) {
    weapon = "Rock";
    alert("Computer choose Rock");
  } else if (hand == 2) {
    weapon = "Paper";
    alert("Computer choose Paper");
  } else {
    weapon = "Scissors";
    alert("Computer choose Scissors");
  }
  return weapon;
}

function playRound() {
  let playerSelection = prompt("What's your choose?");
  const computerSelection = computerPlay();
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  let result = "none";
  if (player == "rock") {
    if (computer == "rock") {
      alert("Draw!");
      result = "draw";
    } else if (computer == "paper") {
      alert("You lose this round!");
      result = "lose";
    } else if (computer == "scissors") {
      alert("You win this round!");
      result = "win";
    }
  } else if (player == "paper") {
    if (computer == "rock") {
      alert("You win this round!");
      result = "win";
    } else if (computer == "paper") {
      alert("Draw!");
      result = "draw";
    } else if (computer == "scissors") {
      alert("You lose this round!");
      result = "lose";
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      alert("You lose this round!");
      result = "lose";
    } else if (computer == "paper") {
      alert("You win this round!");
      result = "win";
    } else if (computer == "scissors") {
      alert("Draw!");
      result = "draw";
    }
  }
  return result;
}

function game() {
  let win = 0;
  let lose = 0;
  let draw = 0;
  let game = playRound();
  console.log(game);
  if (game == "win") {
    win = win + 1;
  } else if (game == "lose") {
    lose = lose + 1;
  } else if (game == "draw") {
    draw = draw + 1;
  }
  game = playRound();
  console.log(game);
  if (game == "win") {
    win = win + 1;
  } else if (game == "lose") {
    lose = lose + 1;
  } else if (game == "draw") {
    draw = draw + 1;
  }
  game = playRound();
  console.log(game);
  if (game == "win") {
    win = win + 1;
  } else if (game == "lose") {
    lose = lose + 1;
  } else if (game == "draw") {
    draw = draw + 1;
  }
  game = playRound();
  console.log(game);
  if (game == "win") {
    win = win + 1;
  } else if (game == "lose") {
    lose = lose + 1;
  } else if (game == "draw") {
    draw = draw + 1;
  }
  game = playRound();
  console.log(game);
  if (game == "win") {
    win = win + 1;
  } else if (game == "lose") {
    lose = lose + 1;
  } else if (game == "draw") {
    draw = draw + 1;
  }
  alert(
    `Total:You won ${win} times, you loss ${lose} times, and have ${draw} drawn matches.`
  );
  if (win > lose) {
    alert("You win this Bo5, You are the Winner!!");
  } else if (win < lose) {
    alert("You loss this Bo5, try harder next time.");
  } else if (win == lose) {
    alert("This is a drawn game.");
  }
}
alert("This is Bo5 Rock Paper Scissors.");
game();
