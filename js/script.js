var playerMove;
playerMove = 'kamień';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber === 1) {
  computerMove = 'kamień';
} else if (randomNumber === 2) {
  computerMove = 'papier';
} else if (randomNumber === 3) {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
console.log('Mój ruch: ' + computerMove);
