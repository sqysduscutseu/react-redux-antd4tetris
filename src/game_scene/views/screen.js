import React, {Component} from 'react';

import './index.css';
import Shape from './shape';
import { recordBlockNo, blocksChange, recordPhase, changeScreenState, randomNextBlock } from '../actions';
import { connect } from 'react-redux';

class Screen extends Component {

    timer = null;

    randomColor = [
        'rgb(134,150,160)',
        'rgb(150,84,84)',
        'rgb(181,196,177)',
        'rgb(201,192,211)',
        'rgb(234,208,209)',
        'rgb(107,81,82)',
        'rgb(101,101,101)'
    ]

    blockShape = [
        {
            shapes: [
                [
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
                [
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
                [
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
                [
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
                ]
            ],
            color: 'rgb(134,150,160)'
        },
        {
            shapes: [
                [
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
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: 2,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
                    },
                    {
                        x: 0,
                        y: -2
                    },
                    {
                        x: 0,
                        y: 1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: -2,
                        y: 0
                    },
                ]
            ],
            color: 'rgb(150,84,84)'
        },
        {
            shapes: [
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
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
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 1
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: 1,
                        y: -1
                    },
                ],
                [
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
                        y: -1
                    },
                    {
                        x: -1,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 1
                    },
                ]
            ],
            color: 'rgb(181,196,177)'
        },
        {
            shapes: [
                [
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
                        x: -1,
                        y: 1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
                    },
                    {
                        x: 1,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 1
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: -1
                    },
                ]
            ],
            color: 'rgb(201,192,211)'
        },
        {
            shapes: [
                [
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
                        y: -1
                    },
                    {
                        x: 1,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
                    },
                    {
                        x: 0,
                        y: 1
                    },
                    {
                        x: -1,
                        y: 1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
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
                ]
            ],
            color: 'rgb(234,208,209)'
        },
        {
            shapes:[ 
                [
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
                        y: -1
                    },
                    {
                        x: -1,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
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
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: 1,
                        y: -1
                    },
                ],
            ],
            color: 'rgb(107,81,82)'
        },
        {
            shapes: [
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: 1,
                        y: 0
                    },
                    {
                        x: 0,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 1
                    },
                    {
                        x: 0,
                        y: -1
                    },
                ],
                [
                    {
                        x: 0,
                        y: 0
                    },
                    {
                        x: -1,
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
                ],
                [
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
                        x: 0,
                        y: -1
                    },
                ]
            ],
            color: 'rgb(101,101,101)'
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
        let {blocks, blockMatrix, phase, currentBlockNo} = this.props;
        let blockNo = blocks.length - 1;
        let {shape, left, bottom} = blocks[blockNo];
        if(e.keyCode === 37){
            for(let i in shape){
                if(shape[i].x + left === 0 || blockMatrix[shape[i].x + left - 1 ][shape[i].y + bottom]){
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
        }else if(e.keyCode === 38){
            if(phase === 3){
                phase = 0;
            }
            else{
                phase ++;
            }
            for(let i in this.blockShape[currentBlockNo].shapes[phase]){
                if(this.blockShape[currentBlockNo].shapes[phase][i].x + left === 0
                    || this.blockShape[currentBlockNo].shapes[phase][i].x + left === 19
                    || this.blockShape[currentBlockNo].shapes[phase][i].x + bottom === 0
                    || blockMatrix[shape[i].x + left + 1 ][shape[i].y + bottom]){
                        if(phase === 0){
                            phase = 3;
                        }
                        else{
                            phase --;
                        }
                        this.props.onRecordPhase(phase);
                        this.blockFalling();
                        return;
                }
            }
            this.props.onRecordPhase(phase);
            blocks[blockNo] = {...blocks[blockNo], shape: this.blockShape[currentBlockNo].shapes[phase]};
            this.props.onBlocksChange(blocks);
            console.log(currentBlockNo);
            this.blockFalling();
        }else if(e.keyCode === 40){
            // 加速功能待实现
            this.blockFalling();
        }
    }

    blockFalling = () => {
        this.timer = setInterval(() => {
            let {blocks, blockMatrix, nextBlockNo} = this.props;
            let blockNo = blocks.length - 1;
            let {shape, left, bottom} = blocks[blockNo];
            if(shape[0].y + bottom === 0 || shape[1].y + bottom === 0 || shape[2].y + bottom === 0 || shape[3].y + bottom === 0
                || blockMatrix[shape[0].x + left][shape[0].y + bottom - 1]
                || blockMatrix[shape[1].x + left][shape[1].y + bottom - 1]
                || blockMatrix[shape[2].x + left][shape[2].y + bottom - 1]
                || blockMatrix[shape[3].x + left][shape[3].y + bottom - 1]){
                    for(let j in shape){
                        blockMatrix[shape[j].x + left][shape[j].y + bottom] = 1;
                    }
                    let colorNo = Math.floor(Math.random()*7)
                    this.props.onChangeScreenState(blockMatrix);
                    let nextBlock = {shape: this.blockShape[nextBlockNo].shapes[0], color: this.randomColor[colorNo], left: 9, bottom: 31}
                    blocks.push(nextBlock);
                    this.generateNextBlock();
                    this.props.onRecordBlockNo(nextBlockNo);
                    this.props.onRecordPhase(0);
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
        }, 200);
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
    onRecordBlockNo: recordBlockNo,
    onBlocksChange: blocksChange,
    onRecordPhase: recordPhase,
    onChangeScreenState: changeScreenState,
    onRandomNextBlock: randomNextBlock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);