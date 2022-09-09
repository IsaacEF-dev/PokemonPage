import { useEffect } from 'react';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa' ;  
import { useParams } from 'react-router-dom';
import { usePaginador } from '../hooks/usePaginador';
export const Pagination = ({data , setPagina}) => {
  const {onMove,onPaginator}=usePaginador(4)
  let pagina=1;
  function back(){
    const r=data.previous;
    console.log(r)
    return data.previous;
  }

  function sig(){
    return data.next;
  }

  useEffect(() => {

  }, [pagina])
  
  
  return (
    <div className="container__paginador">
        <div className="paginador" onClick={onPaginator}>
          <button className='back' onClick={e=>setPagina(back)}><FaAngleLeft/></button>
              
                <a key={pagina} href="" className='active'>{pagina}</a>

          <button className='next' onClick={e=>setPagina(sig)}><FaAngleRight/></button>
        </div>
    </div>
  )
}
