import React, { Component } from 'react';
import { Modal } from 'antd';

import { connect } from 'react-redux';
import { triggerVisible } from '../actions';
// import { initialBlocks, initialBlockMatrix, initialCurrentBlockNo, initialNextBlockNo, initialPhase, matrixInnerRow, matrixBoundRow} from '../../Constant';
import { recordBlockNo, blocksChange, recordPhase, changeScreenState, randomNextBlock, changeSpeed, triggerButton } from '../../display_area/actions';

class EndModal extends Component {

    handleOkCancel = () => {
        let initialBlocks = [{
            left: 9,
            bottom: 31,
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
            color: 'rgb(134,150,160)'
        }];
        let initialBlockMatrix = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]    
        ];
        console.log(initialBlockMatrix);
        this.props.onBlocksChange(initialBlocks);
        this.props.onChangeScreenState(initialBlockMatrix);
        console.log(this.props.blockMatrix);
        this.props.onRecordBlockNo(0);
        this.props.onRandomNextBlock(7);
        this.props.onRecordPhase(0);
        this.props.onTriggerButton();
        this.props.onTriggerVisible();
        console.log(this.props.blocks,this.props.currentBlockNo,this.props.nextBlockNo,this.props.phase)
    }

    render(){
        let {isVisible} = this.props;
        return(
            <div>
                <Modal
                title = '再来一把？'
                visible = {isVisible}
                onOk = {this.handleOkCancel}
                onCancel = {this.handleOkCancel}>
                    <p>见顶了</p>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.gameScene,
        ...state.displayArea
    }
}

const mapDispatchToProps = {
    onTriggerVisible: triggerVisible,
    onRecordBlockNo: recordBlockNo,
    onBlocksChange: blocksChange,
    onRecordPhase: recordPhase,
    onChangeScreenState: changeScreenState,
    onRandomNextBlock: randomNextBlock,
    onChangeSpeed: changeSpeed,
    onTriggerButton: triggerButton,
}

export default connect(mapStateToProps, mapDispatchToProps)(EndModal);