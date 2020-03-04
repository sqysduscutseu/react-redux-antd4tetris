import React from 'react';

const Shape = (props) => {
    let {top} = props;
    console.log(top)
    return(
        <div className = 'shape-wrap' style = {{top}}>
            <div className = 'shape-unit o1'></div>
            <div className = 'shape-unit o2'></div>
            <div className = 'shape-unit o3'></div>
            <div className = 'shape-unit o4'></div>
        </div>
    )
}

export default Shape;