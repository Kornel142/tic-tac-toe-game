export default class ChoosGameMode {
  static addGameModeHandler(handler: Function) {
    window.addEventListener("click", function (e: Event) {
      const target = e.target as HTMLDivElement;
      const newGameWindow = document.querySelector(".new-game")!;
      const GameWindow = document.querySelector(".game-board-section")!;
      if (!target.classList.contains("game-mode")) return;
      const gameMode = target.id;
      handler(gameMode);
      newGameWindow.classList.add("hidde");
      GameWindow.classList.remove("hidde");
      return gameMode;
    });
  }
}
