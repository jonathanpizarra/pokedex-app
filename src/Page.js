import React from 'react';

const Page = ({onPageClick, val})=>{
    return(
        <button className='page-button' val={val} onClick={()=>{onPageClick(val)}}>{val}</button>
    )
}

export default Page;