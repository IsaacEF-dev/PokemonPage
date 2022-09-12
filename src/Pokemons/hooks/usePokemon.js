import React, { useState } from 'react'

export const usePokemon = ({sprites}) => {
console.log(sprites)
    const [pokemon, setPokemon] = useState({
        image1:"",
        image2:"",
        image3:"",
    })

    let image1=sprites.other.dream_world.front_female;
    let image2=sprites.other.home.front_default;
    let image3=sprites.other.home.front_shiny;

    useEffect(() => {
     datePokemon;
    }, data)
    

    const datePokemon=()=>{
        setPokemon({
            image1,
            image2,
            image3
        })
    }

  return {
    pokemon
  };
}
