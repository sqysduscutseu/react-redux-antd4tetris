import {BLOCK_FALL, BLOCKS_CHANHE, BLOCKS_BOUND, SCREEN_STATE} from './actionTypes';

export const blockFall = () => ({
    type: BLOCK_FALL
})

export const blocksChange = (blocks) =>({
    type: BLOCKS_CHANHE,
    blocks: blocks
})

export const recordBound = (blocksBound) => ({
    type: BLOCKS_BOUND,
    blocksBound: blocksBound
})

export const changeScreenState = (blockMatrix) => ({
    type: SCREEN_STATE,
    blockMatrix: blockMatrix
})