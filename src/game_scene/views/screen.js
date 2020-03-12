import React, {Component} from 'react';

import './index.css';
import Shape from './shape';
import { blockFall, blocksChange, recordBound, changeScreenState } from '../actions';
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
        let {blocks, blockMatrix} = this.props;
        let blockNo = blocks.length - 1;
        let {shape, left, bottom} = blocks[blockNo];
        if(e.keyCode === 37){
            for(let i in shape){
                if(left === 0 || blockMatrix[shape[i].x + left - 1 ][shape[i].y + bottom]){
                    return;
                }
            }
            left -= 1;
        }else if(e.keyCode === 39){
            for(let i in shape){
                if(shape[i].x + left === 19 || blockMatrix[shape[i].x + left + 1 ][shape[i].y + bottom]){
                    return;
                }
            }
            left += 1;
        }
        blocks[blockNo] = {...blocks[blockNo], left};
        this.props.onBlocksChange(blocks);
    }

    blockFalling = () => {
        this.timer = setInterval(() => {
            let {blocks, blockMatrix} = this.props;
            let blockNo = blocks.length - 1;
            let {shape, left, bottom} = blocks[blockNo];
            bottom -= 1;
            blocks[blockNo] = {...blocks[blockNo], bottom};
            for(let i in shape){
                if(shape[i].y + bottom === 0 || blockMatrix[shape[i].x + left][shape[i].y + bottom - 1]){
                    for(let j in shape){
                        blockMatrix[shape[j].x + left][shape[j].y + bottom] = 1;
                        this.props.onChangeScreenState(blockMatrix);
                    }
                    let nextBlockNo = Math.round(Math.random()*6);
                    let nextBlock = {...this.blockShape[nextBlockNo], left: 9, bottom: 31}
                    blocks.push(nextBlock);
                }
            }
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
        }, 200);
        console.log('aaa');
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);