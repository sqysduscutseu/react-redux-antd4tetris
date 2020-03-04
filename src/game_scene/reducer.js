import {BLOCK_FALL} from './actionTypes';

const initialState = {
    top: -80,
};

export default (state = initialState, action) => {
    switch(action.type){
        case BLOCK_FALL: {
            let top = state.top + 20;
            return {...state, top}
        }
        default: {
            return {...state}
        }
    }
}