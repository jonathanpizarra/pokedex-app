import React from 'react';
import colors from './colors';

const Type = ({type, onTypeClick, index})=>{

    return(
        <div className={`pokemon-type type-${type}`} style={{borderColor: colors[type]}} onClick={()=>{onTypeClick(index)}}>
            <p className={`type-hidden color-${type}`}>&nbsp;&nbsp;&nbsp;{type[0].toUpperCase() + type.substr(1)}&nbsp;&nbsp;&nbsp;</p>
            <p className='type-visible'>&nbsp;&nbsp;&nbsp;{type[0].toUpperCase() + type.substr(1)}&nbsp;&nbsp;&nbsp;</p>
        </div>
    )
}

export default Type;