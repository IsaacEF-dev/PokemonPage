import React, { useState } from 'react'

export const usePaginador = (initialPaginador=1) => {

    const [paginador, setPaginador] = useState(initialPaginador)

    const onPaginator=(e)=>{
        e.preventDefault();
        
        if(e.target.tagName=="A"){
          limpiarPaginador();
          e.target.className="active"
        }
    }

    const onMove=(e,posicion,next)=>{
        e.preventDefault();
        console.log(next)
        let pagina =document.querySelector(".paginador .active").textContent;
        
        if(parseInt(pagina-posicion)>=0 && parseInt(pagina-posicion)<paginador){
          let r=document.querySelectorAll(".paginador a").item(parseInt(pagina)-posicion);
          limpiarPaginador();
          r.className="active"
        }
      }

    const limpiarPaginador=()=>{
        document.querySelectorAll(".paginador a").forEach(nivel=>{
          nivel.classList.remove("active");
        })
    }

  return {
    onMove,
    onPaginator
  }
}
