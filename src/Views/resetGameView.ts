// import { Autobind } from "../helpers";
import PreviewModalView from "./previewModalView";
import { Autobind } from "../helpers";

class ResetGameView extends PreviewModalView {
  private resetGameBtn = document.querySelector(
    ".reset-game"
  )! as HTMLDivElement;

  addRenderModal(handler: Function) {
    this.resetGameBtn.addEventListener("click", function () {
      handler();
    });
  }

  addRestartModalHandler(
    handler: Function,
    hiddenModal: Function = this.toggleWindow
  ) {
    this.parentElement.addEventListener("click", function (e: Event) {
      const target = e.target as HTMLDivElement;
      //Restart Game
      if (target.classList.contains("restart")) {
        const nextRound = false;
        const cancleBtn = false;
        const resetTurn = true;
        handler(nextRound, cancleBtn, resetTurn);
      } else if (target.classList.contains("cancle")) {
        const nextRound = false;
        const cancleBtn = true;
        handler(nextRound, cancleBtn);
        hiddenModal();
      }
    });
  }

  // Hidde Window
  @Autobind
  protected toggleWindow() {
    this.parentElement.classList.add("hidde");
    this.overlay.classList.add("hidde");
  }

  // generate reset modal
  protected generateMarkup(): string {
    return `
    <div class="modal__header">
    <span class="modal__header__text restart__text"> RESTART GAME? </span>
    </div>
    <div class="modal__buttons">
      <button class="btn__left cancle">NO, CANCLE</button>
      <button class="btn__right restart">YES, RESTART</button>
    </div>`;
  }
}
export default new ResetGameView();
