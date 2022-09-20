import React from 'react'

export const CircleProgress = ({base_stat,stat,id,types}) => {
  console.log(types)
  return (
       
    <div className="content-bar">
        <div className="d-flex justify-content-between align-items-center">
            <p className='stat'>{stat.name}</p>
            <span className="porcent">{(base_stat>100)?100:base_stat}%</span>
        </div>
        <div className="content-progess">
            <div className={`bar__progress ${types}`} style={{width:`${(base_stat>100)?100:base_stat}%`}}>
            </div>
        </div>
    </div>
    
       
  )
}
