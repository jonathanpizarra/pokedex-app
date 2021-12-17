import React from 'react';


const Stats = ({stats})=>{
    return(
        <div className='stat-container'>
            {
                stats.map( (s, i)=>{
                    let stat_name = Object.keys(s)[0];
                    let stat_value = s[stat_name];
                    stat_name = stat_name[0].toUpperCase() + stat_name.substring(1);

                    return (
                        <p key={i} className='stat-item'>
                            <span className='stat-name'>{stat_name} : </span>
                            <span className='stat-value'>{stat_value}</span>
                        </p>
                    )  
                } )
            }
           
        </div>
    )

}

export default Stats;