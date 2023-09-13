import { StateType } from "../config";

export default class PreviewModalView {
  parentElement: HTMLDivElement;
  overlay: HTMLDivElement;
  data: StateType;

  constructor() {
    this.parentElement = document.querySelector(
      ".modal-winner-window"
    )! as HTMLDivElement;
    this.overlay = document.querySelector(".overlay")! as HTMLDivElement;
    this.data = {} as StateType;
  }

  showModal(data: StateType) {
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.classList.remove("hidde");
    this.overlay.classList.remove("hidde");
    this.parentElement.innerHTML = "";
    this.parentElement.insertAdjacentHTML("beforeend", markup);
  }

  updateUI(data: StateType) {
    this.data = data;
    // Select counters
    const counterX = document.querySelector(".X")!;
    const counterO = document.querySelector(".O")!;
    const couterTies = document.querySelector(".ties")!;
    const gameBox: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".board-box")!;
    // Update UI
    counterX.textContent = `${data.game.playersWinTurn.X_turn}`;
    counterO.textContent = `${data.game.playersWinTurn.O_turn}`;
    couterTies.textContent = `${data.game.playersWinTurn.ties}`;
    // Show modal window
    this.overlay.classList.add("hidde");
    this.parentElement.classList.add("hidde");
    // Reset UI all boxes
    gameBox.forEach((box: HTMLDivElement) => {
      box.classList.remove("selected-by-X");
      box.classList.remove("selected-by-O");
      box.classList.remove("win-X");
      box.classList.remove("win-O");
      box.removeAttribute("data-select");
    });
  }

  protected generateMarkup(): any {}
}
