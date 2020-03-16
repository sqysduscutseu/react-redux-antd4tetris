import {MODAL_VISIBLE} from './actionTypes';

const initialState = {
    isVisible: false,
}

export default (state = initialState, action) => {
    switch(action.type){
        case MODAL_VISIBLE: {
            let isVisible = !state.isVisible;
            return {...state, isVisible}
        }
        default: {
            return {...state}
        }
    }
}

// import {CURRENT_BLOCK, BLOCKS_CHANHE, BLOCKS_PHASE, SCREEN_STATE, NEXT_BLOCK} from './actionTypes';

// const mapMatrix = new Array(20);
// for(let i in mapMatrix){
//     mapMatrix[i] = new Array(30);
// }
// for(let i in mapMatrix){
//     for(let j in mapMatrix[i]){
//         mapMatrix[i][j] = 0;
//     }
// }

// const initialState = {
//     blocks: [{
//         left: 9,
//         bottom: 31,
//         shape: [
//             {
//                 x: 0,
//                 y: 0
//             },
//             {
//                 x: 1,
//                 y: 0
//             },
//             {
//                 x: 0,
//                 y: 1
//             },
//             {
//                 x: 1,
//                 y: 1
//             },
//         ],
//         color: 'rgb(134,150,160)'
//     }],
//     phase: 0,
//     blockMatrix: [
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]     
//     ],
//     currentBlockNo: 0,
//     nextBlockNo: 0,
// };

// export default (state = initialState, action) => {
//     switch(action.type){
//         case CURRENT_BLOCK: {
//             let currentBlockNo = action.currentBlockNo;
//             return {...state, currentBlockNo}
//         }
//     case BLOCKS_CHANHE: {
//         let blocks = action.blocks.concat();
//         return {...state, blocks}
//     }
//     case BLOCKS_PHASE: {
//         let phase = action.phase;
//         return {...state, phase}
//     }
//     case SCREEN_STATE: {
//         let blockMatrix = action.blockMatrix.filter(() => true);
//         return {...state, blockMatrix}
//     }
//     case NEXT_BLOCK: {
//         let nextBlockNo = action.nextBlockNo;
//         return {...state, nextBlockNo}
//     }
//         default: {
//             return {...state}
//         }
//     }
// }