let image1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
let image2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
let image3="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png"
export const PokemonPage = () => {
  return (
    <div className="card mb-3 container mt-5 w-60 w-md-80" >
        <div className="row g-0 py-3">
          <div className="col-md-4 ">
            <img src={image1} className="img-fluid rounded-start img__principal" alt="jd"/>
            <div className="galeria">
              <a href="" className="active"><img src={image1} className="prime" alt="" /></a>
              <a href="" ><img src={image2} alt="" /></a>
              <a href=""><img src={image3} alt="" /></a>
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
