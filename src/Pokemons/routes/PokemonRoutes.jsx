import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../../Iu/components/Footer'
import { NavBar } from '../../Iu/components/NavBar'
import { PokemonPage } from '../pages/PokemonPage'
import { SearchPokemon } from '../pages/SearchPokemon'
import { PokemonsPage } from '../pages/PokemonsPage'

export const PokemonRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='pokemons' element={<PokemonsPage/>}/>
            <Route path='pokemon/:id' element={<PokemonPage/>}/>
            <Route path='search' element={<SearchPokemon/>}/>

            <Route path='/*' element={<Navigate to={"/pokemons"}/>}/>

        </Routes>
        <Footer/>
    </>
  )
}
