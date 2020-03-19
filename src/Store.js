import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import {reducer as gameReducer} from './game_scene';
import {reducer as displayReducer} from './display_area';

const win = window;
const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    gameScene: gameReducer,
    displayArea: displayReducer
});

const store = createStore(reducer,  /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)));

export default store;
