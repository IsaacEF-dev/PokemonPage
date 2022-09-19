import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CircleProgress } from "../components/CircleProgress"
import { useFetch } from "../hooks/useFetch"
import {BsArrowReturnLeft} from "react-icons/all"

let image1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
let image2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
let image3 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png"
export const PokemonPage = () => {

  const { id } = useParams();
  let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const navigate=useNavigate();
  const {data,isLoading} = useFetch(url)
  
  const [firstImage, setFirstImage] = useState("")

  const onChangeImage=(e)=>{
    if(e.target.tagName!=="IMG") return ;
    
    const active=document.querySelector(".active")
    active.className="image__opcion"
    
    setFirstImage(e.target.src);
    e.target.className="image__opcion active";
  }
  const handleBack=(e)=>{
    navigate(-1);
  }
  

  !isLoading && console.log(data);

  return (
    !isLoading &&
    <div className="content-card  containers">
      <div className="card  mb-3 d-flex justify-content-center w-45 w-60" >
          <div className="row g-0">
            <div className={`col-md-5 ${data.types[0].type.name} position-relative p-2`}>
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
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title text">{data.name}</h5>  
                <div className="informacion__pokemon">
                  <div className="tipo__informacion">
                    <p>{data.weight}</p>
                    <span>Weight</span>
                  </div>
                  <div className="tipo__informacion">
                    <p>#{data.id}</p>
                    <span>Pokemon</span>
                  </div>
                  <div className="tipo__informacion">
                    <p>{data.base_experience}</p>
                    <span>Experience</span>
                  </div>
                </div>
                {
                  data.stats.map((dato,i)=>(
                  (i<4) && <CircleProgress key={i} id={i}{...dato} types={data.types[0].type.name}/>
                  )) 
                }
              </div>
            </div>
            <button href="" onClick={handleBack} className="to__return"><BsArrowReturnLeft/></button>
          </div>
        </div>
      </div>
  )

}
