import React from 'react';


const Type = ({type, onTypeClick, index})=>{

    return(
        <div className={`pokemon-type type-${type}`} onClick={onTypeClick}>
            <p className={`type-hidden color-${type}`}>&nbsp;&nbsp;&nbsp;{type[0].toUpperCase() + type.substr(1)}&nbsp;&nbsp;&nbsp;</p>
            <p className='type-visible'>&nbsp;&nbsp;&nbsp;{type[0].toUpperCase() + type.substr(1)}&nbsp;&nbsp;&nbsp;</p>
        </div>
    )
}

export default Type;