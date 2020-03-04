import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {reducer as gameReducer} from './game_scene';


const reducer = combineReducers({
    game: gameReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
