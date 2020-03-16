import React from 'react';
import { Row, Col, Statistic } from 'antd';

const ScoreShow = (props) => {
    let {value} = props;
    return(
        <div>
            <Row className = 'score-lay'>
                <Col span = {24}>
                    <Statistic title = 'SCORE' value = {value} />
                </Col>
            </Row>
        </div>
    )
}

export default ScoreShow;