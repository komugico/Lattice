import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import GameContainer from './game/containers/gameContainer';
import gameReducer from './game/modules/game/reducer';

const store = createStore(gameReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GameContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
