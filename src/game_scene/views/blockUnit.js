import React from 'react';

const BlockUnit = (props) => {
    let {shapeClassName, top, left} = props
    return(
        <div className = {shapeClassName} style = {{top, left}}></div>
    )
}

export default BlockUnit;