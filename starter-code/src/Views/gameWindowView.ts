import { CssClass, StateType, PlayerConfig, GameConfig } from "../config";
import iconWinXDefault from "../../assets/icon-x-default.svg";
import iconWinODefault from "../../assets/icon-o-default.svg";

export default class GameWindow {
  private static parentElement = document.querySelector(
    ".game-board"
  )! as HTMLDivElement;
  private static gameBox: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".board-box")!;
  private static data: StateType;

  // Init Hover
  static updateUI(data: StateType) {
    this.data = data;
    this.updatePlayerUI();
    this.showWhoTurn();
    this.addSelectClassListener();
    this.addHoverListeners();
  }

  // Block event
  static blockEventHandling() {
    this.parentElement.classList.add("block-event");
  }

  // un block event
  static unBlockEventHandlind() {
    this.parentElement.classList.remove("block-event");
  }

  // Add point to array
  static addBoxHandler(
    handler: Function,
    countBox: Function = this.selectedBoxCounter
  ) {
    this.parentElement.addEventListener("click", function (e: Event) {
      const target = e.target as HTMLDivElement;
      const point = +target.id;
      if (
        target.dataset.select === "SELECTED" ||
        !target.classList.contains("board-box")
      )
        return;
      if (
        !target.classList.contains("board-O") &&
        !target.classList.contains("board-X")
      )
        return;
      else target.dataset.select = "SELECTED";
      countBox() === true ? handler(point, true) : handler(point);
    });
  }


  // Add Cpu choice logic
  static addCpuChoice(data: StateType) {
    this.data = data;
    const [className] = this.selectClass();
    const arr = Array.from(this.gameBox);
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 10);
    } while (!arr[randomId] || arr[randomId].dataset.select === "SELECTED");
    const randomElement = arr[randomId];
    const idOfElement = +arr[randomId].id;
    randomElement.classList.add(className);
    randomElement.dataset.select = "SELECTED";
    return idOfElement;
  }

  // Counter (draw)
  static selectedBoxCounter() {
    const gamebox = Array.from(document.querySelectorAll(".board-box"))!;
    for (const element of gamebox) {
      // Check if element is a instance of HTMLElement
      if (element instanceof HTMLElement) {
        // Check if element has a attribute dataset eqauals value "SELECTED"
        if (!element.dataset || element.dataset.select !== "SELECTED") {
          // If element not has a attribute dataset equals vale "SELECTED", return false
          return false;
        }
      }
    }
    // If every elements achive the condition, return true
    return true;
  }

  // Add win CLass
  static addWinClass(numbersArray: number[]) {
    numbersArray.forEach((number: number) => {
      const element = document.getElementById(String(number))!;
      if (element && element.classList.contains("selected-by-X")) {
        element.classList.add("win-X");
      } else {
        element.classList.add("win-O");
      }
    });
  }

  // Show player turn
  private static showWhoTurn() {
    const gameplayTurn = document.querySelector(
      ".gameplay__turn"
    )! as HTMLDivElement;
    gameplayTurn.innerHTML = "";
    const markup = this.generateMarkupTurn();
    gameplayTurn.insertAdjacentHTML("beforeend", markup);
  }

  // Ganarete turn markup
  private static generateMarkupTurn() {
    if (this.data.currentPlayer === PlayerConfig.PLAYER_O)
      return `      
    <svg class="gamplay__turn-icon">
    ${iconWinODefault}
    </svg>
    <span class="gamplay__turn__text"> TURN</span>`;
    else
      return `
    <svg class="gamplay__turn-icon">
    ${iconWinXDefault}
    </svg>
    <span class="gamplay__turn__text"> TURN</span>`;
  }

  static updatePlayerUI() {
    const playerO = document.querySelector(".O-text")! as HTMLDivElement;
    const playerX = document.querySelector(".X-text")! as HTMLDivElement;
    if (this.data.game.gameType === GameConfig.PLAYER_VS_PLAYER) {
      this.data.players.player1 === PlayerConfig.PLAYER_O
        ? (playerO.textContent = "O (P1)")
        : (playerO.textContent = "O (P2)");
      this.data.players.player2 === PlayerConfig.PLAYER_X
        ? (playerX.textContent = "X (P2)")
        : (playerX.textContent = "X (P1)");
    } else {
      this.data.players.player1 === PlayerConfig.PLAYER_O
        ? (playerO.textContent = "O (YOU)")
        : (playerO.textContent = "O (CPU)");
      this.data.players.player2 === PlayerConfig.PLAYER_X
        ? (playerX.textContent = "X (CPU)")
        : (playerX.textContent = "X (YOU)");
    }
  }

  // Add Select Class
  private static addSelectClassListener() {
    this.gameBox.forEach((box: HTMLDivElement) => {
      box.addEventListener("click", this.addClickBox);
    });
  }

  // Change hover between X and O
  private static addHoverListeners() {
    this.gameBox.forEach((box: HTMLDivElement) => {
      box.addEventListener("mouseenter", this.mouseEnterHandler);
      box.addEventListener("mouseout", this.mouseOutHandler);
    });
  }

  // Add Event
  private static addClickBox = (event: MouseEvent) => {
    this.boxClick(event);
  };

  // Enter init
  private static mouseEnterHandler = (event: MouseEvent) => {
    this.handleMouseEnter(event);
  };

  // Out init
  private static mouseOutHandler = (event: MouseEvent) => {
    this.handleMouseOut(event);
  };

  // Enter
  private static handleMouseEnter(event: MouseEvent) {
    const [className, delClass] = this.hoverClass();
    const target = event.target as HTMLDivElement;
    if (target.dataset.select === "SELECTED") return;
    target.classList.add(className);
    target.classList.remove(delClass);
  }

  // Out
  private static handleMouseOut(event: MouseEvent) {
    const [className, delClass] = this.hoverClass();
    const target = event.target as HTMLDivElement;
    target.classList.remove(className);
    target.classList.remove(delClass);
  }

  // Event Click
  private static boxClick(event: MouseEvent) {
    const [className, delClass] = this.selectClass();
    const target = event.target as HTMLDivElement;
    if (
      target.dataset.select === "SELECTED" ||
      !target.classList.contains("board-box")
    )
      return;
    target.classList.add(className);
    target.classList.remove(delClass);
  }

  // Choose Hover Class
  static hoverClass() {
    const className =
      this.data.currentPlayer === PlayerConfig.PLAYER_O
        ? CssClass.HOVER_O
        : CssClass.HOVER_X;
    // Del className
    const delClass =
      this.data.currentPlayer === PlayerConfig.PLAYER_O
        ? CssClass.HOVER_X
        : CssClass.HOVER_O;
    return [className, delClass];
  }

  // Choose Select class
  static selectClass() {
    // Class Name
    const className =
      this.data.currentPlayer === PlayerConfig.PLAYER_O
        ? CssClass.SELECTED_O
        : CssClass.SELECTED_X;
    // Del className
    const delClass =
      this.data.currentPlayer === PlayerConfig.PLAYER_O
        ? CssClass.SELECTED_X
        : CssClass.SELECTED_O;
    return [className, delClass];
  }
}
