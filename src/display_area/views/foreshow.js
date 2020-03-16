import React from 'react';
import { Row, Col } from 'antd';

const Foreshow = (props) => {
    let {foreshowBlock} = props;
    return(
        <div className = 'foreshow-wrap'>
            <Row>
                <Col span = {24}>
                    <h3>NEXT</h3>
                        <div className = 'foreshow'>
                            {foreshowBlock.shapes[0] && foreshowBlock.shapes[0].map((unit, index) => <div key = {index} className = ' show-unit '
                            style = {{left: unit.x*40, bottom: unit.y*40, backgroundColor: foreshowBlock.color}}></div>)}
                        </div>
                </Col>
            </Row>
        </div>
    )
}

export default Foreshow;