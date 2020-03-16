import React, { Component } from 'react';

import KeySwitch from './keySwitch';
import ScoreShow from './scoreShow';
import Foreshow from './foreshow';

import { recordBlockNo, blocksChange, recordPhase, changeScreenState, randomNextBlock, changeSpeed, triggerButton } from '../actions';
import { connect } from 'react-redux';
import { randomNo, createBlock, blockShape } from '../../Constant';
import { triggerVisible } from '../../game_scene/actions';

class DisplayContainer extends Component {

    timer = null;


    gameStart = () => {
        document.addEventListener('keydown', this.blockTranslation, false);
        this.props.onTriggerButton();
        this.initializeGame();
        this.blockFalling();
    }

    gameOver = () => {
        document.removeEventListener('keydown',this.blockTranslation,false);
        clearInterval(this.timer);
        this.props.onTriggerVisible();
    }

    initializeGame = () => {
        let {blocks, currentBlockNo} = this.props;
        currentBlockNo = randomNo();
        let firstBlock = createBlock(currentBlockNo);
        blocks[0] = firstBlock;
        this.props.onRecordBlockNo(currentBlockNo);
        this.generateNextBlock();
        this.props.onBlocksChange(blocks);
    }

    blockTranslation = (e) => {
        clearInterval(this.timer);
        let {blocks, blockMatrix, phase, currentBlockNo} = this.props;
        let blockNo = blocks.length - 1;
        let {shape, left, bottom} = blocks[blockNo];
        if(e.keyCode === 37){//左移
            for(let i in shape){
                if(blockMatrix[shape[i].x + left - 1 + 1 ][shape[i].y + bottom + 1]){
                    this.blockFalling();
                    return;
                }
            }
            left -= 1;
            blocks[blockNo] = {...blocks[blockNo], left};
            this.props.onBlocksChange(blocks);
            this.blockFalling();
        }else if(e.keyCode === 39){//右移
            for(let i in shape){
                if(blockMatrix[shape[i].x + left + 1 + 1 ][shape[i].y + bottom + 1]){
                    this.blockFalling();
                    return;
                }
            }
            left += 1;
            blocks[blockNo] = {...blocks[blockNo], left};
            this.props.onBlocksChange(blocks);
            this.blockFalling();
        }else if(e.keyCode === 38){//变形
            if(phase === 3){
                phase = 0;
            }
            else{
                phase ++;
            }
            for(let i in blockShape[currentBlockNo].shapes[phase]){
                if( blockMatrix[blockShape[currentBlockNo].shapes[phase][i].x + left + 1][blockShape[currentBlockNo].shapes[phase][i].y + bottom + 1]
                    || blockMatrix[shape[i].x + left + 1 + 1][shape[i].y + bottom + 1]
                    || blockMatrix[shape[i].x + left + 1 - 1][shape[i].y + bottom + 1]
                    || blockMatrix[shape[i].x + left + 1][shape[i].y + bottom + 1 - 1]){
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
            blocks[blockNo] = {...blocks[blockNo], shape: blockShape[currentBlockNo].shapes[phase]};
            this.props.onBlocksChange(blocks);
            this.blockFalling();
        }else if(e.keyCode === 40){//加速
            // 加速功能待实现
            this.blockFalling();
        }
    }

    blockFalling = () => {
        let {speed} = this.props;
        this.timer = setInterval(() => {
            let {blocks, blockMatrix, nextBlockNo} = this.props;
            let blockNo = blocks.length - 1;
            let {shape, left, bottom} = blocks[blockNo];
            for(let i = 1; i < 21; i++ ){
                if(blockMatrix[i][31] === 1){
                    this.gameOver();
                    break;
                }
            };
            if(blockMatrix[shape[0].x + left + 1][shape[0].y + bottom + 1 - 1]
                || blockMatrix[shape[1].x + left + 1][shape[1].y + bottom + 1 - 1]
                || blockMatrix[shape[2].x + left + 1][shape[2].y + bottom + 1 - 1]
                || blockMatrix[shape[3].x + left + 1][shape[3].y + bottom + 1 - 1]){
                    for(let j in shape){
                        blockMatrix[shape[j].x + left + 1][shape[j].y + bottom + 1] = 1;
                    }
                    this.props.onChangeScreenState(blockMatrix);
                    let nextBlock = createBlock(nextBlockNo);
                    blocks.push(nextBlock);
                    this.generateNextBlock();
                    this.props.onRecordBlockNo(nextBlockNo);
                    this.props.onRecordPhase(0);
                }else
                {
                    bottom -= 1;
                    blocks[blockNo] = {...blocks[blockNo], bottom};
                }
            this.props.onBlocksChange(blocks);
        }, speed);
    }

    generateNextBlock = () => {
        let nextBlockNo = randomNo();
        this.props.onRandomNextBlock(nextBlockNo);
    }

    handleSpeed = (speed) => {
        this.props.onChangeSpeed(speed);
    }

    render(){
        let {nextBlockNo, value, isButtonDisabled} = this.props;
        return(
            <div>
                <KeySwitch gameStart = {this.gameStart} handleSpeed = {this.handleSpeed} isButtonDisabled = {isButtonDisabled} />
                <ScoreShow value = {value} />
                <Foreshow foreshowBlock = {blockShape[nextBlockNo]} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.displayArea
    };
}

const mapDispatchToProps = {
    onRecordBlockNo: recordBlockNo,
    onBlocksChange: blocksChange,
    onRecordPhase: recordPhase,
    onChangeScreenState: changeScreenState,
    onRandomNextBlock: randomNextBlock,
    onChangeSpeed: changeSpeed,
    onTriggerButton: triggerButton,
    onTriggerVisible: triggerVisible,
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);