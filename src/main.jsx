import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { PokemonApp } from './PokemonApp';
import { PokemonRoutes } from './Pokemons/routes/PokemonRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonApp/>
    </BrowserRouter>
  </React.StrictMode>
)