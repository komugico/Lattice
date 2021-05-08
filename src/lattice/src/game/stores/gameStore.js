import { createStore } from "redux";
import gameReducer from '../modules/game/reducer';

export default createStore(gameReducer);