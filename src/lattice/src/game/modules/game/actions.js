export const RESET_STATE   = '@@game/resetState';
export const PROGRESS_TURN = '@@game/progressTurn';
export const GRAB_STONE    = '@@game/grabStone'
export const PUT_STONE     = '@@game/putStone';
export const UPDATE_SCORE  = '@@game/updateScore';

export const resetState   = ()     => ({ type: RESET_STATE                 });
export const progressTurn = ()     => ({ type: PROGRESS_TURN               });
export const grabStone    = (data) => ({ type: GRAB_STONE,   payload: data });
export const putStone     = (data) => ({ type: PUT_STONE,    payload: data });
export const updateScore  = (data) => ({ type: UPDATE_SCORE, payload: data });