import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { CircleProgress } from "../components/CircleProgress"
import { useFetch } from "../hooks/useFetch"

let image1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
let image2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
let image3 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png"
export const PokemonPage = () => {

  const { id } = useParams();
  let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const {data,isLoading} = useFetch(url)
  
  const [firstImage, setFirstImage] = useState("")

  const onChangeImage=(e)=>{
    if(e.target.tagName!=="IMG") return ;

    const active=document.querySelector(".active")
    active.className="image__opcion"

    setFirstImage(e.target.src);
    e.target.className="image__opcion active";
  }

  return (
    !isLoading &&
    <>
      <div className="row row-cols-1 mt-5 " >
        <div className="w-100">
          <div className="card">
              <div className="card-top">
                  <div className="bg-card-img">
                    <div className="bg-top"></div>
                    {
                      firstImage=="" && setFirstImage(data.sprites.other.dream_world.front_default)
                    }
                    <div className="content__img">
                      <img src={firstImage} className="img-fluid rounded-start img__principal" alt="jd" />
                    </div>
                    <div className="galeria" onClick={onChangeImage}>
                      <img src={data.sprites.other.dream_world.front_default} className="prime image__opcion active" alt="" />
                      <img src={data.sprites.other.home.front_default} alt="" className="image__opcion" />
                      <img src={data.sprites.other.home.front_shiny} alt="" className="image__opcion" />
                    </div>
                  </div>
              </div>
              <div className="card-body p-3">
                {
                  data.stats.map((dato,i)=>(
                  (i<3) && <CircleProgress key={i} id={i}{...dato}/>
                  )) 
                }
              </div>
          </div>
        </div>
      </div>
      </>
  )

}
