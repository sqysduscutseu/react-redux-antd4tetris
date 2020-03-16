import React, { Component } from 'react';
import { Row, Col, Button, Radio } from 'antd';
import { ChromeFilled } from '@ant-design/icons';

class KeySwitch extends Component {

    

    render(){
        let {gameStart, handleSpeed, isButtonDisabled} = this.props;
        return(
            <div>
                <Row className = 'btn-lay'>
                    <Col span = {8}><Button onClick = {gameStart} disabled = {isButtonDisabled} ><ChromeFilled style = {{color: 'blue'}} spin = {isButtonDisabled} />START</Button></Col>
                    <Col span = {16}>
                        <Radio.Group defaultValue = 'n' buttonStyle = 'solid' disabled = {isButtonDisabled}>
                            <Radio.Button value = 's' onClick = {() => {handleSpeed(200)}} >SLOW</Radio.Button>
                            <Radio.Button value = 'n' onClick = {() => {handleSpeed(150)}} >NOMAL</Radio.Button>
                            <Radio.Button value = 'f' onClick = {() => {handleSpeed(100)}} >FAST</Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default KeySwitch;
