import React from 'react'
import { ListCards } from '../components/ListCards'
import { Pagination } from '../components/Pagination'
import { useFetch } from '../hooks/useFetch'

export const PokemonsPage = () => {

  
  return (
    <div className="container mt-5">
   
        <ListCards />

    </div>
  )
}
