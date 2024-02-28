// Type for State
export interface StateType {
  currentPlayer: string;
  firstTurn: string;
  cpuTurn: boolean
  players: {
    player1: string;
    player2: string;
  };
  whoWinTurn: {
    X_WIN: boolean;
    O_WIN: boolean;
    ties: boolean;
  };
  game: {
    gameType: string;
    playerTurn: string;
    playersPoints: {
      X_points: number[];
      O_points: number[];
    };
    playersWinTurn: {
      X_turn: number;
      ties: number;
      O_turn: number;
    };
  };
}

// Winning combinations
export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Choose Player config
export enum PlayerConfig {
  DEFAULT_PLAYER = "X",
  PLAYER_X = "X",
  PLAYER_O = "O",
}

// Game mode config
export enum GameConfig {
  DEFAULT = "",
  PLAYER_VS_CPU = "CPU",
  PLAYER_VS_PLAYER = "PVP",
}

// Game turn and points counter
export enum GameTurn {
  DEFAULT_TURN = "X",
  X_TURN = "X",
  O_TURN = "O",
}

// Game points
export enum GamePoints {
  X_POINTS = 0,
  O_POINTS = 0,
  TIES = 0,
}

// CSS Class
export enum CssClass {
  HOVER_DEFAULT = "selected-board-mark-X",
  HOVER_X = "board-X",
  HOVER_O = "board-O",
  SELECTED_X = "selected-by-X",
  SELECTED_O = "selected-by-O",
}

// Winner
export enum Winner {
  WINNER_X = "X",
  WINNER_O = "O",
  TIE = "tie",
  DEFAULT_WINNER = "",
}
