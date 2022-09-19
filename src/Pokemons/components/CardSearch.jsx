import React from 'react'
import { Link } from 'react-router-dom';

export const CardSearch = ({sprites,types,id,name}) => {

  let image =sprites.other.dream_world.front_default;
    
  return (
    
    <>
      <div className="col w-55 mt-5">
        <div className="card">
            <div className="card-top">
                <div className="bg-card-img">
                  <div className={`bg-top ${(types[0].type.name) ? types[0].type.name:global}` }></div>
                  <img src={image} alt="" />
                </div>
            </div>
            <div className="card-body p-3">
                <p className='num-pokemon'>#{id}</p>
                <h5 className="card-title text-uppercase">{name}</h5>
                <Link to={`/pokemon/${id}`} className="btn-pokemon">View Pokemon</Link>
            </div>
        </div>
      </div>
    </>
  )
}
