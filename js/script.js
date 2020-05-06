function playGame(playerInput) {
  clearMessages();

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
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("Remis!");
    } else if (argPlayerMove == "nieznany ruch") {
      printMessage("Wybrałeś inną liczbę niż 1, 2 lub 3. Spróbuj ponownie!");
    } else {
      printMessage("Przegrałeś :-(");
    }
  }

  displayResult(argComputerMove, argPlayerMove);
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