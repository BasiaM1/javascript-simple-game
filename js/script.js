function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  }
  if (argMoveId == 2) {
    return "papier";
  }
  if (argMoveId == 3) {
    return "nożyce";
  }

  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage("Ruch komputera to: " + argComputerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage("Twój ruch to: " + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {
  console.log("moves:", argComputerMove, argPlayerMove);

  if (
    (argComputerMove == "kamień" && argPlayerMove == "papier") ||
    (argComputerMove == "nożyce" && argPlayerMove == "kamień") ||
    (argComputerMove == "papier" && argPlayerMove == "nożyce")
  ) {
    return "Ty wygrywasz!";
  } else if (argComputerMove == argPlayerMove) {
    return "Remis!";
  } else if (argPlayerMove == "nieznany ruch") {
    return "Wybrałeś inną liczbę niż 1, 2 lub 3. Spróbuj ponownie!";
  } else {
    return "Przegrałeś :-(";
  }
}

printMessage(displayResult(argComputerMove, argPlayerMove));