/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import {
    RESET_STATE,
    PUT_STONE,
    UPDATE_SCORE,
    PROGRESS_TURN
} from './actions'
import {
    NUM_LATTICE,
    STONE_EMPTY,
    STONE_WHITE,
    STONE_BLACK,
    PLAYER_1,
    PLAYER_2,
    INIT_SCORE,
    INIT_TURN
} from '../../constants/gameConstant';

/* ========================================================================== */
/* Constant Values                                                            */
/* ========================================================================== */
// 諸々の初期値をNUM_LATTICEから計算
const initialBoard = {
    lattice: JSON.parse(JSON.stringify(
                (new Array(NUM_LATTICE)).fill((new Array(NUM_LATTICE)).fill(STONE_EMPTY)))
             ),
    block:   JSON.parse(JSON.stringify(
                (new Array(NUM_LATTICE - 1)).fill((new Array(NUM_LATTICE - 1)).fill(STONE_EMPTY)))
             ),
};
const initialSmallStones = Math.floor(NUM_LATTICE * (NUM_LATTICE - 1) / 2);
const initialBigStones = Math.floor((NUM_LATTICE - 2) * (NUM_LATTICE - 2) / 2);

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
        player1: INIT_SCORE,
        player2: INIT_SCORE
    },
    turn: INIT_TURN,
    next: PLAYER_1,
    grabbed: STONE_EMPTY
};

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_STATE:
            return initialState;
        case PUT_STONE:
            return state;
        case UPDATE_SCORE:
            return state;
        case PROGRESS_TURN:
            if (state.next == PLAYER_1) {
                return { ...state, turn: state.turn + 1, next: PLAYER_2 };
            }
            else {
                return { ...state, turn: state.turn + 1, next: PLAYER_1 };
            }
        default:
            return state;
    }
};

export default gameReducer;