// Funkcja generująca losowy wybór komputera
function computerChoice() {
    const choices = ["kamień", "papier", "nożyce"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Funkcja porównująca wybory gracza i komputera oraz zwracająca wynik rundy
  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Remis! Oboje wybraliście " + playerChoice + ".";
    } else if (
      (playerChoice === "kamień" && computerChoice === "nożyce") ||
      (playerChoice === "papier" && computerChoice === "kamień") ||
      (playerChoice === "nożyce" && computerChoice === "papier")
    ) {
      return "Wygrałeś rundę! Twój " + playerChoice + " pokonuje " + computerChoice + ".";
    } else {
      return "Przegrałeś rundę! Twój " + playerChoice + " jest pokonany przez " + computerChoice + ".";
    }
  }
  
  // Funkcja rozpoczynająca grę
  function startGame() {
    const playerChoice = prompt("Wybierz kamień, papier lub nożyce:").toLowerCase();
    
    if (playerChoice !== "kamień" && playerChoice !== "papier" && playerChoice !== "nożyce") {
      alert("Nieprawidłowy wybór. Spróbuj jeszcze raz.");
      startGame(); // Ponowne wywołanie funkcji, jeśli wybór był nieprawidłowy
      return;
    }
    
    const computer = computerChoice();
    const result = playRound(playerChoice, computer);
    
    alert(result);
    
    const playAgain = confirm("Czy chcesz zagrać jeszcze raz?");
    if (playAgain) {
      startGame(); // Ponowne wywołanie funkcji, jeśli gracz chce zagrać jeszcze raz
    } else {
      alert("Dziękujemy za grę!");
    }
  }
  
  // Rozpoczęcie gry po załadowaniu strony
  startGame();