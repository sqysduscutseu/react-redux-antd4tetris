import React from 'react';

const Shape = (props) => {
    let {shape, color, left, bottom} = props;
    return(
        <div className = 'shape-wrap' style = {{left: left*20, bottom: bottom*20}}>
            {shape && shape.map((unit, index) => <div key = {index} className = 'shape-unit '
             style = {{left: unit.x*20, bottom: unit.y*20, backgroundColor: color}}>{console.log(shape)}</div>)}
        </div>
    )
}

export default Shape;