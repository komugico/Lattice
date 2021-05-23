/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as logics from './logics';
import * as C from '../../constants/gameConstant';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const gameReducer = (state = logics.createInitState(), action) => {
    switch (action.type) {
        /* ================================================================== */
        case actions.RESET_STATE: /* 初期状態にリセットする ================= */
            return logics.createInitState();
        /* ================================================================== */
        case actions.PROGRESS_TURN: /* ターンを進める ======================= */
            if (state.next === C.PLAYER_1) {
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
                    if (state.next === C.PLAYER_1) {
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
                    if (state.next === C.PLAYER_1) {
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
            let newScore = {
                player1: state.next === C.PLAYER_1 ? state.scores.player1 : state.scores.player1 + 1,
                player2: state.next === C.PLAYER_2 ? state.scores.player2 : state.scores.player2 + 1,
            }
            return {
                ...state,
                scores: newScore
            };
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