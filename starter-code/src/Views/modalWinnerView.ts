// Icons
import iconWinX from "../../assets/icon-x-win.svg";
import iconWinO from "../../assets/icon-o-win.svg";
import PreviewModalView from "./previewModalView";
import { GameConfig, PlayerConfig } from "../config";
class ModalView extends PreviewModalView {
  // Modal handler
  addModalHandler(handler: Function) {
    this.parentElement.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLDivElement;
      // Next round btn
      if (target.classList.contains("next__round__btn")) {
        const nextRound = true;
        handler(nextRound, false);
      }
      // Quit btn
      if (target.classList.contains("quit__btn")) {
        const gameBoard = document.querySelector(".game-board-section")!;
        const newGameBoard = document.querySelector(".new-game")!;
        gameBoard.classList.add("hidde");
        newGameBoard.classList.remove("hidde");
        const nextRound = false;
        handler(nextRound, false, false);
      }
    });
  }

  // Generate Content in modal
  protected generateMarkup(): string {
    return `
    <span class="modal__winner-text">${this.generateMarkupHeader()}</span>
    <div class="modal__header">
      ${this.generateMarkupText()}
    </div>
    <div class="modal__buttons">
      <button class="btn__left quit__btn">QUIT</button>
      <button class="btn__right next__round__btn">NEXT ROUND</button>
    </div>`;
  }

  // Generate Markup text
  private generateMarkupText() {
    if (this.data.whoWinTurn.O_WIN)
      return `
   <svg class="modal__winner__icon"${iconWinO}</svg>
   <span class="modal__header__text O__win__text"> TAKES THE ROUND </span>
    `;
    if (this.data.whoWinTurn.X_WIN)
      return `
    <svg class="modal__winner__icon">${iconWinX}</svg>
    <span class="modal__header__text X__win__text"> TAKES THE ROUND </span>
    `;
    if (this.data.whoWinTurn.ties)
      return `
    <span class="modal__header__text restart__text"> ROUND TIED </span>
    `;
    return ``;
  }

  // Generate header text 
  private generateMarkupHeader() {
    // PVP
    if (this.data.game.gameType === GameConfig.PLAYER_VS_PLAYER) {
      return this.winnerAlgoritm("PLAYER 1 WINS!", "PLAYER 2 WINS!");
    }
    // CPU
    if (this.data.game.gameType === GameConfig.PLAYER_VS_CPU) {
      return this.winnerAlgoritm("YOU WON!", "OH NO, YOU LOST...");
    }
    return ``;
  }

  // Winner algoritm
  private winnerAlgoritm(string1: string, string2: string) {
    if (
      this.data.whoWinTurn.O_WIN === true &&
      this.data.players.player1 === PlayerConfig.PLAYER_O
    )
      return string1;
    else if (
      this.data.whoWinTurn.O_WIN === true &&
      this.data.players.player2 === PlayerConfig.PLAYER_O
    )
      return string2;
    // X
    if (
      this.data.whoWinTurn.X_WIN === true &&
      this.data.players.player1 === PlayerConfig.PLAYER_X
    )
      return string1;
    else if (
      this.data.whoWinTurn.X_WIN === true &&
      this.data.players.player2 === PlayerConfig.PLAYER_X
    )
      return string2;

    return "";
  }
}

export default new ModalView();
