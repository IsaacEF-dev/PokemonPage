import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { Cards } from './Cards'
import { Pagination } from './Pagination';

export const ListCards = () => {

  

  const [pagina, setPagina] = useState("https://pokeapi.co/api/v2/pokemon?limit=12&&offset=0")
  
  const {data,isLoading}=useFetch(pagina);

  
  
  
  return (
    !isLoading &&
    <>
      <div className="row row-cols-1 row-cols-md-3 gx-4 gy-5">
        
          {
            data.results.map((pokemon, i)=>(
                <Cards key={(i+1)} {...pokemon}/>
            ))
          }

      </div>
      <Pagination data={data} setPagina={setPagina}/>
    </>
  )
}
