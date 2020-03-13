import React, {Component} from 'react';

import './index.css';
import Shape from './shape';
import { blockFall, blocksChange, recordBound, changeScreenState, randomNextBlock } from '../actions';
import { connect } from 'react-redux';

class Screen extends Component {

    timer = null;

    blockShape = [
        {
            shape: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 1,
                    y: 0
                },
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 1,
                    y: 1
                },
            ],
            color: 'yellow'
        },
        {
            shape: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 0,
                    y: 2
                },
                {
                    x: 0,
                    y: 3
                },
            ],
            color: 'cyan'
        },
        {
            shape: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 1,
                    y: 0
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 2,
                    y: 1
                },
            ],
            color: 'red'
        },
        {
            shape: [
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 1,
                    y: 0
                },
                {
                    x: 2,
                    y: 0
                },
            ],
            color: 'green'
        },
        {
            shape: [
                {
                    x: 0,
                    y: 2
                },
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 1,
                    y: 0
                },
            ],
            color: 'orange'
        },
        {
            shape: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: 1,
                    y: 0
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 1,
                    y: 2
                },
            ],
            color: 'magenta'
        },
        {
            shape: [
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 2,
                    y: 1
                },
                {
                    x: 1,
                    y: 0
                },
            ],
            color: 'purple'
        }
    
    ]

    componentDidMount(){
        document.addEventListener('keydown', this.blockTranslation, false);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.blockTranslation);
    }

    blockTranslation = (e) => {
        clearInterval(this.timer);
        let {blocks, blockMatrix} = this.props;
        let blockNo = blocks.length - 1;
        let {shape, left, bottom} = blocks[blockNo];
        if(e.keyCode === 37){
            for(let i in shape){
                if(left === 0 || blockMatrix[shape[i].x + left - 1 ][shape[i].y + bottom]){
                    this.blockFalling();
                    return;
                }
            }
            left -= 1;
            blocks[blockNo] = {...blocks[blockNo], left};
            this.props.onBlocksChange(blocks);
            this.blockFalling();
        }else if(e.keyCode === 39){
            for(let i in shape){
                if(shape[i].x + left === 19 || blockMatrix[shape[i].x + left + 1 ][shape[i].y + bottom]){
                    this.blockFalling();
                    return;
                }
            }
            left += 1;
            blocks[blockNo] = {...blocks[blockNo], left};
            this.props.onBlocksChange(blocks);
            this.blockFalling();
        }
    }

    blockFalling = () => {
        this.timer = setInterval(() => {
            let {blocks, blockMatrix, nextBlockNo} = this.props;
            let blockNo = blocks.length - 1;
            let {shape, left, bottom} = blocks[blockNo];
            if(bottom === 0 || blockMatrix[shape[0].x + left][shape[0].y + bottom - 1]
                || blockMatrix[shape[1].x + left][shape[1].y + bottom - 1]
                || blockMatrix[shape[2].x + left][shape[2].y + bottom - 1]
                || blockMatrix[shape[3].x + left][shape[3].y + bottom - 1]){
                    for(let j in shape){
                        blockMatrix[shape[j].x + left][shape[j].y + bottom] = 1;
                        console.log(shape[j].x + left, shape[j].y + bottom, blockMatrix[shape[j].x + left][shape[j].y + bottom]);
                    }
                    this.props.onChangeScreenState(blockMatrix);
                    let nextBlock = {...this.blockShape[nextBlockNo], left: 9, bottom: 31}
                    blocks.push(nextBlock);
                    this.generateNextBlock();
                }else
                {
                    bottom -= 1;
                    blocks[blockNo] = {...blocks[blockNo], bottom};
                }
            /*
            bottom -= 1;
            blocks[blockNo] = {...blocks[blockNo], bottom};
            
            for(let i in shape){
                if(shape[i].y + bottom === 0 || blockMatrix[shape[i].x + left][shape[i].y + bottom - 1]){
                    for(let j in shape){
                        blockMatrix[shape[j].x + left][shape[j].y + bottom] = 1;
                        console.log(shape[j].x + left, shape[j].y + bottom, blockMatrix[shape[j].x + left][shape[j].y + bottom]);
                    }
                    this.props.onChangeScreenState(blockMatrix);
                    let nextBlock = {...this.blockShape[nextBlockNo], left: 9, bottom: 31}
                    blocks.push(nextBlock);
                    this.generateNextBlock();
                }else{
                    if(i === 1){
                        // bottom -= 1;
                        // blocks[blockNo] = {...blocks[blockNo], bottom};
                    }
                }
            }
            */
            
            
            // for(let i in shape){
            //     if(shape[i].y + bottom === blocksBound[shape[i].x + left]){
            //         for(let j in shape){
            //             blocksBound[shape[j].x + left] = shape[j].y + bottom + 1 > blocksBound[shape[j].x + left] ? 
            //             shape[j].y + bottom + 1 : blocksBound[shape[j].x + left];
            //             this.props.onRecordBound(blocksBound);
            //         }
                    // let nextBlockNo = Math.round(Math.random()*6);
                    // let nextBlock = {...this.blockShape[nextBlockNo], left: 9, bottom: 31}
                    // blocks.push(nextBlock);
            //     }
            // }
            this.props.onBlocksChange(blocks);
        }, 100);
        console.log('aaa');
    }

    generateNextBlock = () => {
        let nextBlockNo = Math.floor(Math.random()*7);
        this.props.onRandomNextBlock(nextBlockNo);
    }

    render(){
        let {blocks} = this.props;
        return(
            <div className = 'screen-wrap'>
                <div className = 'screen' onClick = {this.blockFalling}>
                    {blocks.map((block, index) => <Shape key = {index} shape = {block.shape} color = {block.color} left = {block.left} bottom = {block.bottom} />)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.game
    };
}

const mapDispatchToProps = {
    onBlockFall: blockFall,
    onBlocksChange: blocksChange,
    onRecordBound: recordBound,
    onChangeScreenState: changeScreenState,
    onRandomNextBlock: randomNextBlock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);