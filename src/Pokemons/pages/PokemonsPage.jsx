import React from 'react'
import { Link } from 'react-router-dom'
import { ListCards } from '../components/ListCards'

export const PokemonsPage = () => {
  return (
    <div className="container mt-5">
      <ListCards/>
    </div>
  )
}
