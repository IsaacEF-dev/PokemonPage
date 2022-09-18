import React from 'react'
import {FcSearch,IoClose} from 'react-icons/all'

export const SearchPokemon = () => {
  return (
    <div className="content__search">
      <form action="" className="container__search">
        
        <input type="text" className="search" />
        <FcSearch className='icon__search'/>
      </form>
      <div className="container__modal">
        <img src='../../../assets/NoResults.png' alt="" className="img__modal" />
        <div className="content__message">
          <p className="message">No results found</p>
          <div className="btn__close"><IoClose/></div>
        </div>
      </div>
    </div>
  )
}
