import React, { useState } from 'react'
import {FcSearch,IoClose,BsArrowReturnLeft} from 'react-icons/all'
import { Navigate, useNavigate } from 'react-router-dom';
import { Cards } from '../components/Cards';
import { CardSearch } from '../components/CardSearch';
import { Modal } from '../components/Modal';
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm'

export const SearchPokemon = () => {
 const navigate=useNavigate();
 const {searchs,inputChange}=useForm({searchs:""});

 const [bus, setBus] = useState(0);

 const searchPokemon=(e)=>{
  e.preventDefault();

  setBus( searchs.toLowerCase());
}

 const {data, isLoading}=useFetch(`https://pokeapi.co/api/v2/pokemon/${bus}/`)


  return (
    
    <div className="content__search">
      <form action="" className="container__search" onSubmit={searchPokemon}>
        <input type="text" 
        className="search" 
        name='searchs' 
        value={searchs} 
        placeholder='Search pokemon...' 
        onChange={inputChange}/>
        <FcSearch onClick={searchPokemon} className='icon__search'/>
      </form>
      {
        (!isLoading && data!==null) ?
          <CardSearch {...data}/>
        :
          <div className="container__modal">
            <img src='../../../assets/NoResults.png' alt="" className="img__modal" />
            <div className="content__message">
              <p className="message">No results found</p>
            </div>
          </div>
      }
      
      <button href="" onClick={()=>navigate(-1)} className="to__return"><BsArrowReturnLeft/></button>
    </div>
  )
}
