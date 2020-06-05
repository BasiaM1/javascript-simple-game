{
  const playGame = function playGame(playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "rock";
      }
      if (argMoveId == 2) {
        return "paper";
      }
      if (argMoveId == 3) {
        return "scissors";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const argComputerMove = getMoveName(randomNumber);
    printMessage("Game result")
    printMessage("Computer move: " + argComputerMove);

    console.log("Gracz wpisał: " + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage("Your move: " + argPlayerMove);

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log("moves:", argComputerMove, argPlayerMove);

      if (
        (argComputerMove == "rock" && argPlayerMove == "paper") ||
        (argComputerMove == "scissors" && argPlayerMove == "rock") ||
        (argComputerMove == "paper" && argPlayerMove == "scissors")
      ) {
        wins.innerHTML = ++gameSummary.wins;
        printMessage("You win!");
      } else if (argComputerMove == argPlayerMove) {
        draws.innerHTML = ++gameSummary.draws;
        printMessage("Draw!");
      } else if (argPlayerMove == "nieznany ruch") {
        printMessage("Wybrałeś inną liczbę niż 1, 2 lub 3. Spróbuj ponownie!");
      } else {
        losses.innerHTML = ++gameSummary.losses;
        printMessage("You lose :-(");
      }
    }

    displayResult(argComputerMove, argPlayerMove);

    gameNum.innerHTML = ++gameSummary.numbers;
  }
  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
  });

  const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
  }

  const wins = document.querySelector('p span.wins');
  const draws = document.querySelector('p.draws span')
  const losses = document.querySelector('p span.losses')
  const gameNum = document.querySelector('.panel-result .numbers span')

  const endGame = function () {
    wins.innerHTML = 0;
    draws.innerHTML = 0;
    losses.innerHTML = 0;
    gameNum.innerHTML = 0;
    clearMessages();

  }
  document.getElementById('end').addEventListener('click', endGame);
}