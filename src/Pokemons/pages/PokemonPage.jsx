import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

let image1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
let image2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
let image3="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png"
export const PokemonPage =  () => {
let imagenes="";
  
  const {id}=useParams();
  let url=`https://pokeapi.co/api/v2/pokemon/${id}/`;
  let pokemo
  const {data,isLoading}= useFetch(url)

  const [firstImg, setFirstImg] = useState(image1="");

  useEffect(() => {
    console.log("me")
  }, [setFirstImg])
  
  if(data!==null){
  const onChangeImage=(e)=>{
    if(e.target.tagName!=="IMG")return;

    setFirstImg(e.target.src)
    e.target.className="image__opcion active"
  }
 

  
  return (
    !isLoading &&
    <div className="card mb-3 container mt-5 w-60 w-md-80" >
        <div className="row g-0 py-3">
          <div className="col-md-4 ">
            
            <img src={data.sprites.other.dream_world.front_female} className="img-fluid rounded-start img__principal" alt="jd"/>
            <div className="galeria" onClick={onChangeImage}>
              <img src={image2} className="prime image__opcion active" alt="" />
              <img src={image2} alt="" className="image__opcion"/>
              <img src={image3} alt="" className="image__opcion"/>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>
  )
  }   
}
