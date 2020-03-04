import React, {Component} from 'react';

import './index.css';
import Shape from './shape';
import { blockFall } from '../actions';
import { connect } from 'react-redux';

class Screen extends Component {

    timer = null;

    blockFalling = () => {
        this.timer = setInterval(() => {
            this.props.onBlockFall();
        }, 100)
        console.log('aaa')
    }

    render(){
        let {top} = this.props;
        return(
            <div className = 'screen-wrap'>
                <div className = 'screen' onClick = {this.blockFalling}>
                    <Shape top = {top} />
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
    onBlockFall: blockFall
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);