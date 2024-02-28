import { StateType } from "../config";
export default class ChoosePlayer {
  private static parentElement = document.querySelector(
    ".player-choose"
  )! as HTMLDivElement;
  static data: StateType;

  // Add choose player
  static addChoosePlayerHandler(handler: Function) {
    this.parentElement.addEventListener("click", function (e: Event) {
      const target = e.target as HTMLDivElement;
      if (!target.closest(".PLAYER")) return;
      const player = target.closest(".PLAYER")?.id;
      const playerX = document.querySelector(".game-start__x-mark");
      const playerO = document.querySelector(".game-start__o-mark");
      if (player == "X") {
        playerX?.classList.add("selected");
        playerO?.classList.remove("selected");
      } else {
        playerX?.classList.remove("selected");
        playerO?.classList.add("selected");
      }
      handler(player);
    });
  }

}
