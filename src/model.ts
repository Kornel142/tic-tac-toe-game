import {
  PlayerConfig,
  GameConfig,
  GameTurn,
  StateType,
  Winner,
  WINNING_COMBINATIONS,
} from "./config";
import { arraysContainSameElements } from "./helpers";

// Game state
export const state: StateType = {
  currentPlayer: PlayerConfig.DEFAULT_PLAYER,
  firstTurn: PlayerConfig.PLAYER_X,
  cpuTurn: false,
  players: {
    player1: PlayerConfig.PLAYER_O,
    player2: PlayerConfig.PLAYER_X,
  },
  whoWinTurn: {
    X_WIN: false,
    O_WIN: false,
    ties: false,
  },
  game: {
    gameType: GameConfig.DEFAULT,
    playerTurn: GameTurn.DEFAULT_TURN,
    playersPoints: {
      X_points: [],
      O_points: [],
    },
    playersWinTurn: {
      X_turn: 0,
      ties: 0,
      O_turn: 0,
    },
  },
};

// Upload currentPlayer status
export const loadPlayer = function (currentPlayer: string) {
  if (currentPlayer === "O") {
    state.players.player1 = PlayerConfig.PLAYER_O;
    state.players.player2 = PlayerConfig.PLAYER_X;
  }
  if (currentPlayer === "X") {
    state.players.player1 = PlayerConfig.PLAYER_X;
    state.players.player2 = PlayerConfig.PLAYER_O;
  }
};

// Upload Game status
export const loadGame = function (gameMode: string) {
  gameMode === "PVP"
    ? (state.game.gameType = GameConfig.PLAYER_VS_PLAYER)
    : (state.game.gameType = GameConfig.PLAYER_VS_CPU);
};

// Upload Point
export const loadPoints = function (point: number) {
  // Check Player
  if (state.currentPlayer === PlayerConfig.PLAYER_X) {
    // Push X point to array
    state.game.playersPoints.X_points.push(point);

    // Change currentPlayer
    state.currentPlayer = PlayerConfig.PLAYER_O;
  } else {
    // Push O point to array
    state.game.playersPoints.O_points.push(point);

    // Change currentPlayer
    state.currentPlayer = PlayerConfig.PLAYER_X;
  }
};

// Check Winner
export const checkWinner = function (playerArr: number[]) {
  return WINNING_COMBINATIONS.some((combinations: number[]) => {
    return arraysContainSameElements(combinations, playerArr);
  });
};

// Load winner
export const loadWinner = function (winner: string) {
  if (winner === Winner.WINNER_X) {
    state.whoWinTurn.X_WIN = true;
    state.game.playersWinTurn.X_turn++;
  }
  if (winner === Winner.WINNER_O) {
    state.whoWinTurn.O_WIN = true;
    state.game.playersWinTurn.O_turn++;
  }
  if (winner === Winner.TIE) {
    state.whoWinTurn.ties = true;
    state.game.playersWinTurn.ties++;
  }
};

// New Round
export const newRound = function () {
  chooseFirstTurn();
  editData();
};

export const resetTurn = function () {
  editData();
  resetFirstTurn();
};

// First turn choice
export const resetFirstTurn = function () {
  if (state.game.gameType === GameConfig.PLAYER_VS_PLAYER) {
    if (state.firstTurn === PlayerConfig.PLAYER_X) {
      state.currentPlayer = PlayerConfig.PLAYER_X;
      state.game.playerTurn = GameTurn.X_TURN;
    }
    if (state.firstTurn === PlayerConfig.PLAYER_O) {
      state.currentPlayer = PlayerConfig.PLAYER_O;
      state.game.playerTurn = GameTurn.O_TURN;
    }
  }
  if (state.game.gameType === GameConfig.PLAYER_VS_CPU) {
    // X
    if (
      state.firstTurn === PlayerConfig.PLAYER_X &&
      state.players.player2 === PlayerConfig.PLAYER_X
    ) {
      state.currentPlayer = PlayerConfig.PLAYER_X;
      state.game.playerTurn = GameTurn.X_TURN;
      state.cpuTurn = true;
    } else if (
      state.firstTurn === PlayerConfig.PLAYER_X &&
      state.players.player1 === PlayerConfig.PLAYER_X
    ) {
      state.currentPlayer = PlayerConfig.PLAYER_X;
      state.game.playerTurn = GameTurn.X_TURN;
    }
    // O
    else if (
      state.firstTurn === PlayerConfig.PLAYER_O &&
      state.players.player2 === PlayerConfig.PLAYER_O
    ) {
      state.currentPlayer = PlayerConfig.PLAYER_O;
      state.game.playerTurn = GameTurn.O_TURN;
      state.cpuTurn = true;
    } else if (
      state.firstTurn === PlayerConfig.PLAYER_O &&
      state.players.player1 === PlayerConfig.PLAYER_O
    ) {
      state.currentPlayer = PlayerConfig.PLAYER_O;
      state.game.playerTurn = GameTurn.O_TURN;
    }
  }
};

// Edit data
const editData = function () {
  state.whoWinTurn.X_WIN = false;
  state.whoWinTurn.O_WIN = false;
  state.whoWinTurn.ties = false;
  state.game.playersPoints.X_points = [];
  state.game.playersPoints.O_points = [];
};

// Choose first turn
const chooseFirstTurn = function () {
  if (state.firstTurn === PlayerConfig.PLAYER_X) {
    state.currentPlayer = PlayerConfig.PLAYER_O;
    state.firstTurn = PlayerConfig.PLAYER_O;
    state.game.playerTurn = GameTurn.O_TURN;
  } else if (state.firstTurn === PlayerConfig.PLAYER_O) {
    state.currentPlayer = PlayerConfig.PLAYER_X;
    state.firstTurn = PlayerConfig.PLAYER_X;
    state.game.playerTurn = GameTurn.X_TURN;
  }
};
