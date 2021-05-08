/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as C from '../../constants/gameConstant';

/* ========================================================================== */
/* Constant Values                                                            */
/* ========================================================================== */
// 諸々の初期値をNUM_LATTICEから計算
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

// 初期ステート
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
    turn: C.INIT_TURN,
    next: C.PLAYER_1,
    grabbed: C.STONE_EMPTY
};

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.RESET_STATE:
            return initialState;
        case actions.GRAB_STONE:
            return { ...state, grabbed: action.payload };
        case actions.PUT_STONE:
            let board = state.board;
            if (state.grabbed & C.STONE_CHK_BIG) {
                if (board.block[action.payload.y][action.payload.x] === C.STONE_EMPTY) {
                    board.block[action.payload.y][action.payload.x] = state.grabbed;
                }
                else {
                    return { ...state }
                }
            }
            else {
                if (board.lattice[action.payload.y][action.payload.x] === C.STONE_EMPTY) {
                    board.lattice[action.payload.y][action.payload.x] = state.grabbed;
                }
                else {
                    return { ...state }
                }
            }
            return {
                ...state,
                board: board,
                grabbed: C.STONE_EMPTY,
                turn: state.turn + 1,
                next: state.next === C.PLAYER_1 ? C.PLAYER_2 : C.PLAYER_1
            }
        case actions.UPDATE_SCORE:
            return state;
        case actions.PROGRESS_TURN:
            if (state.next == C.PLAYER_1) {
                return { ...state, turn: state.turn + 1, next: C.PLAYER_2 };
            }
            else {
                return { ...state, turn: state.turn + 1, next: C.PLAYER_1 };
            }
        default:
            return state;
    }
};

export default gameReducer;