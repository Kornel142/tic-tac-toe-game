import ChoosGameMode from "./Views/chooseGameModeView";
import * as model from "./model";
import GameWindow from "./Views/gameWindowView";
import { GameConfig, PlayerConfig, Winner } from "./config";
import ModalView from "./Views/modalWinnerView";
import ResetGameView from "./Views/resetGameView";
import ChoosePlayer from "./Views/choosePlayerView";
import { checkCondition, findWinBox } from "./helpers";

declare var module: NodeModule & {
  hot?: {
    accept(
      dependencies: string[],
      callback: (updatedDependencies: any) => void
    ): void;
    accept(dependency: string, callback: () => void): void;
  };
};

if (module.hot) {
  module.hot.accept();
}

// Choose Player
const controlChoosePlayer = function (player: string) {
  model.loadPlayer(player);
};

// Choose Game Mode
const controlChooseGM = function (gameMode: string) {
  model.loadGame(gameMode);
  // PVP MODE
  if (model.state.game.gameType === GameConfig.PLAYER_VS_PLAYER) {
    // Init hover
    controlUI();
    GameWindow.addBoxHandler(controlGameStatus);
  } else if (model.state.game.gameType === GameConfig.PLAYER_VS_CPU) {
    playCPU();
  }
  console.log(model.state);
};

// controll Add points
const controlPoint = function (point: number) {
  model.loadPoints(point);
};

// Control Winner
const controlWinner = function (tie: boolean) {
  //  O win
  if (model.checkWinner(model.state.game.playersPoints.O_points)) {
    model.loadWinner(Winner.WINNER_O);
    // Add win class
    GameWindow.blockEventHandling();
    GameWindow.addWinClass(findWinBox(model.state.game.playersPoints.O_points));
    controlShowModal();
  }
  // X win
  if (model.checkWinner(model.state.game.playersPoints.X_points)) {
    model.loadWinner(Winner.WINNER_X);
    // Add win class
    GameWindow.blockEventHandling();
    GameWindow.addWinClass(findWinBox(model.state.game.playersPoints.X_points));
    controlShowModal();
  }
  // Control tie
  if (tie === true) {
    GameWindow.blockEventHandling();
    model.loadWinner(Winner.TIE);
    controlShowModal();
  }
};

// Controle Game Status
const controlGameStatus = function (point: number, tie: boolean) {
  if (model.state.cpuTurn === true) return;
  controlPoint(point);
  controlUI();
  controlWinner(tie);
};

// Handler
const cpuHandler = function (point: number, tie: boolean) {
  controlGameStatus(point, tie);
  if (checkCondition(model.state)) return;
  runGameLoop();
};

// CPU
const playCPU = function () {
  GameWindow.updateUI(model.state);
  if (model.state.players.player1 === PlayerConfig.PLAYER_O) {
    cpuChoice();
  }
  if (model.state.players.player1 === PlayerConfig.PLAYER_X) {
    playerChoice();
  }
};

// Game loop
const runGameLoop = async function () {
  GameWindow.blockEventHandling();
  model.state.cpuTurn = true;
  await new Promise((resolve) => {
    setTimeout(() => {
      while (model.state.cpuTurn) {
        const point = GameWindow.addCpuChoice(model.state);
        const tie = GameWindow.selectedBoxCounter();
        model.state.cpuTurn = false;
        controlGameStatus(point, tie);
        resolve("resolved");
        controlUnBlockHandler();
      }
    }, 1000);
  });
};

// Control Modal
const controlNextRoundOrReset = function (
  nextRound: boolean,
  cancleBtn: boolean,
  restetTurn: boolean
) {
  if (cancleBtn === false) {
    if (nextRound === true) {
      model.newRound();
      cpuNextRound();
      ModalView.updateUI(model.state);
      controlUI();
    } else {
      restetTurn === true ? controlResetGame() : location.reload();
    }
  } else return;
};

// Control CPU next Round
const cpuNextRound = function () {
  if (model.state.game.gameType === GameConfig.PLAYER_VS_CPU) {
    if (
      model.state.players.player1 === PlayerConfig.PLAYER_O &&
      model.state.currentPlayer === PlayerConfig.PLAYER_O
    ) {
      playerChoice();
    }
    if (
      model.state.players.player1 === PlayerConfig.PLAYER_O &&
      model.state.currentPlayer === PlayerConfig.PLAYER_X
    ) {
      cpuChoice();
    }
    if (
      model.state.players.player1 === PlayerConfig.PLAYER_X &&
      model.state.currentPlayer === PlayerConfig.PLAYER_O
    ) {
      cpuChoice();
    }
  }
};

// Hover
const controlUI = function () {
  GameWindow.updateUI(model.state);
};

// Show Modal
const controlShowModal = function () {
  setTimeout(() => {
    ModalView.showModal(model.state);
  }, 700);
};

// Block Handler
const controlUnBlockHandler = function () {
  setTimeout(() => {
    GameWindow.unBlockEventHandlind();
  }, 1500);
};

// Show reset Modal
const controlRenderResetModal = function () {
  ResetGameView.showModal(model.state);
  ResetGameView.addRestartModalHandler(controlNextRoundOrReset);
};

// Hard Reset
const controlResetGame = function () {
  model.resetTurn();
  ModalView.updateUI(model.state);
  controlUI();
  if (model.state.cpuTurn === true) cpuChoice();
};

// player Choice
const playerChoice = function () {
  controlUnBlockHandler();
  controlUI();
  GameWindow.addBoxHandler(cpuHandler);
};

// Cpu choice
const cpuChoice = function () {
  GameWindow.blockEventHandling();
  runGameLoop();
  GameWindow.addBoxHandler(cpuHandler);
};

// Init app
const init = function () {
  // Handlers
  ChoosGameMode.addGameModeHandler(controlChooseGM);
  ChoosePlayer.addChoosePlayerHandler(controlChoosePlayer);
  // Reset Game Modal
  ResetGameView.addRenderModal(controlRenderResetModal);
  // Win game Modal
  ModalView.addModalHandler(controlNextRoundOrReset);
};
init();
