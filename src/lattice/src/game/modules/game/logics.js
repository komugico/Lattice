import * as C from '../../constants/gameConstant';


export const createInitState = () => {
    const initialBoard = {
        lattice: JSON.parse(JSON.stringify(
            (new Array(C.NUM_LATTICE)).fill((new Array(C.NUM_LATTICE)).fill(C.STONE_EMPTY)))
        ),
        block: JSON.parse(JSON.stringify(
            (new Array(C.NUM_LATTICE - 1)).fill((new Array(C.NUM_LATTICE - 1)).fill(C.STONE_EMPTY)))
        ),
    }

    const initialSmallStones = Math.floor(C.NUM_LATTICE * (C.NUM_LATTICE - 1) / 2)
    const initialBigStones = Math.floor((C.NUM_LATTICE - 2) * (C.NUM_LATTICE - 2) / 2)
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
    }

    return initialState
}