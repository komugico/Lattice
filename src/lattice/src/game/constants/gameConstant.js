export const NUM_LATTICE = 5;

/* ========================================================================== */
/* 石                                                                         */
/* ========================================================================== */
// 石定義
export const STONE_EMPTY       = 0b000;
export const STONE_SMALL_WHITE = 0b100;
export const STONE_SMALL_BLACK = 0b101;
export const STONE_BIG_WHITE   = 0b110;
export const STONE_BIG_BLACK   = 0b111;
// 識別用
export const STONE_CHK_EXIST   = 0b100;
export const STONE_CHK_BIG     = 0b010;
export const STONE_CHK_BLACK   = 0b001;
/* ========================================================================== */

export const PLAYER_1 = 1;
export const PLAYER_2 = 2;

export const INIT_SCORE = 0;
export const INIT_TURN = 1;
export const INIT_BOARD_SIZE = 100;

export const WHITE_IMG_PATH = "/img/reversi_white.png";
export const BLACK_IMG_PATH = "/img/reversi_black.png";