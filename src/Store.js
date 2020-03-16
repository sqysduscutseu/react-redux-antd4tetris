import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {reducer as gameReducer} from './game_scene';
import {reducer as displayReducer} from './display_area';


const reducer = combineReducers({
    gameScene: gameReducer,
    displayArea: displayReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
