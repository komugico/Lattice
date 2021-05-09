/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as C from '../../constants/gameConstant';

/* ========================================================================== */
/* Constant Values                                                            */
/* ========================================================================== */
/* 諸々の初期値をNUM_LATTICEから計算 */
const initialBoard = {
    lattice: JSON.parse(JSON.stringify(
                (new Array(C.NUM_LATTICE)).fill((new Array(C.NUM_LATTICE)).fill(C.STONE_EMPTY)))
             ),
    block:   JSON.parse(JSON.stringify(
                (new Array(C.NUM_LATTICE - 1)).fill((new Array(C.NUM_LATTICE - 1)).fill(C.STONE_EMPTY)))
             ),
};
const initialSmallStones = Math.floor(C.NUM_LATTICE * (C.NUM_LATTICE - 1) / 2);
const initialBigStones = Math.floor((C.NUM_LATTICE - 2) * (C.NUM_LATTICE - 2) / 2);

/* 初期ステート */
const initialState = {
    board: initialBoard,
    stones: {
        player1: {
            small: initialSmallStones,
            big: initialBigStones
        },
        player2: {
            small: initialSmallStones,
            big: initialBigStones
        }
    },
    scores: {
        player1: C.INIT_SCORE,
        player2: C.INIT_SCORE
    },
    boardSize: C.INIT_BOARD_SIZE,
    turn: C.INIT_TURN,
    next: C.PLAYER_1,
    grabbed: C.STONE_EMPTY
};

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        /* ================================================================== */
        case actions.RESET_STATE: /* 初期状態にリセットする ================= */
            return initialState;
        /* ================================================================== */
        case actions.PROGRESS_TURN: /* ターンを進める ======================= */
            if (state.next == C.PLAYER_1) {
                /* プレイヤー１からプレイヤー２へ */
                return { ...state, turn: state.turn + 1, next: C.PLAYER_2 };
            }
            else {
                /* プレイヤー２からプレイヤー１へ */
                return { ...state, turn: state.turn + 1, next: C.PLAYER_1 };
            }
        /* ================================================================== */
        case actions.GRAB_STONE: /* 石を持つ ================================ */
            return { ...state, grabbed: action.payload };
        /* ================================================================== */
        case actions.PUT_STONE: /* 石を置く ================================= */
            let x = action.payload.x;
            let y = action.payload.y;
            let board = state.board;
            let stones = state.stones;
            if (state.grabbed & C.STONE_CHK_BIG) {
                /* 大きい石の場合 */
                if (board.block[y][x] === C.STONE_EMPTY) {
                    /* 置き場所が空の場合は置く */
                    board.block[y][x] = state.grabbed;
                    if (state.next == C.PLAYER_1) {
                        stones.player1.big = stones.player1.big - 1;
                    }
                    else {
                        stones.player2.big = stones.player2.big - 1;
                    }
                }
                else {
                    /* 置き場所に石がある場合は置かない */
                    return { ...state }
                }
            }
            else {
                /* 小さい石の場合 */
                if (board.lattice[y][x] === C.STONE_EMPTY) {
                    /* 置き場所が空の場合は置く */
                    board.lattice[y][x] = state.grabbed;
                    if (state.next == C.PLAYER_1) {
                        stones.player1.small = stones.player1.small - 1;
                    }
                    else {
                        stones.player2.small = stones.player2.small - 1;
                    }
                }
                else {
                    /* 置き場所に石がある場合は置かない */
                    return { ...state }
                }
            }
            /* ターンを進める */
            return {
                ...state,
                board: board,
                stones: stones,
                grabbed: C.STONE_EMPTY,
                turn: state.turn + 1,
                next: state.next === C.PLAYER_1 ? C.PLAYER_2 : C.PLAYER_1
            }
        /* ================================================================== */
        case actions.UPDATE_SCORE: /* スコア計算を行う ====================== */
            return PopStateEvent;
        /* ================================================================== */
        case actions.UPDATE_BOARD_SIZE: /* ボードサイズの更新を行う ========= */
            return { ...state, boardSize: action.payload };
        /* ================================================================== */
        default:
            return state;
        /* ================================================================== */
    }
};

export default gameReducer;