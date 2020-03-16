import {CURRENT_BLOCK, BLOCKS_CHANHE, BLOCKS_PHASE, SCREEN_STATE, NEXT_BLOCK, SPEED_GRADE, BUTTON_DISABLED} from './actionTypes';

export const recordBlockNo = (currentBlockNo) => ({
    type: CURRENT_BLOCK,
    currentBlockNo: currentBlockNo
})

export const blocksChange = (blocks) =>({
    type: BLOCKS_CHANHE,
    blocks: blocks
})

export const recordPhase = (phase) => ({
    type: BLOCKS_PHASE,
    phase: phase
})

export const changeScreenState = (blockMatrix) => ({
    type: SCREEN_STATE,
    blockMatrix: blockMatrix
})

export const randomNextBlock = (nextBlockNo) => ({
    type: NEXT_BLOCK,
    nextBlockNo: nextBlockNo
})

export const changeSpeed = (speed) => ({
    type: SPEED_GRADE,
    speed: speed
})

export const triggerButton = () => ({
    type: BUTTON_DISABLED
})