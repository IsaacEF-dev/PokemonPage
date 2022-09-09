import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const Cards = ({name, url}) => {
  const {data,isLoading}=useFetch(url);
  
  let image ="";
  !isLoading && (image=data.sprites.other.dream_world.front_default);
  return (

    !isLoading &&
    <>
      <div className="col">
        <div className="card">
            <div className="card-top">
                <div className="bg-card-img">
                  <div className="bg-top"></div>
                  <img src={image} alt="" />
                </div>
            </div>
            <div className="card-body p-3">
                <p className='num-pokemon'>#{data.id}</p>
                <h5 className="card-title text-uppercase">{name}</h5>
                <Link to={`/pokemon/${data.id}`} className="btn-pokemon">View Pokemon</Link>
            </div>
        </div>
      </div>
    </>
  )
}
