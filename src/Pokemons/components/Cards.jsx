import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = () => {
  return (
    <>
        <div className="card">
            <div className="card-top">
                <div className="bg-card-img">
                  <div className="bg-top"></div>
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg" alt="" />
                </div>
            </div>
            <div className="card-body p-3">
                <p className='num-pokemon'>#1</p>
                <h5 className="card-title text-uppercase">bulbasaur</h5>
                <Link to={"/pokemons"} className="btn-pokemon">View Pokemon</Link>
            </div>
        </div>
    </>
  )
}
