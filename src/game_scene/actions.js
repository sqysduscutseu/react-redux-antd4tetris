import {BLOCK_FALL, BLOCKS_CHANHE, BLOCKS_BOUND, SCREEN_STATE, NEXT_BLOCK} from './actionTypes';

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

export const randomNextBlock = (nextBlockNo) => ({
    type: NEXT_BLOCK,
    nextBlockNo: nextBlockNo
})