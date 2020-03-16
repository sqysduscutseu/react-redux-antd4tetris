import React, { Component } from 'react';
import { Modal } from 'antd';

import { connect } from 'react-redux';
import { triggerVisible } from '../actions';
import { initialBlocks, initialBlockMatrix, initialCurrentBlockNo, initialNextBlockNo, initialPhase} from '../../Constant';
import { recordBlockNo, blocksChange, recordPhase, changeScreenState, randomNextBlock, changeSpeed, triggerButton } from '../../display_area/actions';

class EndModal extends Component {

    handleOkCancel = () => {
        this.props.onBlocksChange(initialBlocks);
        this.props.onChangeScreenState(initialBlockMatrix);
        this.props.onRecordBlockNo(initialCurrentBlockNo);
        this.props.onRandomNextBlock(initialNextBlockNo);
        this.props.onRecordPhase(initialPhase);
        this.props.onTriggerButton();
        this.props.onTriggerVisible();
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