import { FaAngleLeft,FaAngleRight } from 'react-icons/fa' ;  
import { useForm } from '../hooks/useForm';

export const Pagination = ({data , setPagina}) => {

  const {formState,inputChange}=useForm({pagina:1})
  const limite=54;
  
  const movePage=(val=0)=>{
    formState.pagina-=val;

    (formState.pagina)<=0 && (formState.pagina=1);
    (formState.pagina)>limite && (formState.pagina=limite);

    let move=((formState.pagina-1)*12);
      
    return `https://pokeapi.co/api/v2/pokemon?offset=${move}&limit=12`;
    
  } 

  const onPagina=(e)=>{
    e.preventDefault();
    setPagina( movePage(0));
  }
  
  return (
    <div className="container__paginador">
        <div className="paginador">
          <button className='back' onClick={e=>setPagina(movePage(1))}><FaAngleLeft/></button>
              
                <form action="" onSubmit={onPagina}>
                  <input className='active' 
                  name='pagina'
                  type="text" 
                  value={formState.pagina} 
                  onChange={inputChange}
                  />
                </form>

          <button className='next' onClick={e=>setPagina(movePage(-1))}><FaAngleRight/></button>
        </div>
    </div>
  )
}
