import { Link, NavLink, useNavigate } from 'react-router-dom';
import {BsFillSunFill,BsFillMoonFill,ImLinkedin2,BsGithub,BsGlobe2} from 'react-icons/all'


export const NavBar = () => {

    const navigate=useNavigate();

    const onLogout=()=>{
        navigate("/login",{
            replace:true
        })
    }

    const toggle=(e)=>{
        e.preventDefault();

      if(e.target.className.includes("active")){
        e.target.className="slider round"
        return;
      }

      e.target.className="slider round active"
    }

    return (
        <nav className="navbar navbar-expand-sm  p-3 ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src="../../../assets/Pokemon-Logo.png" alt="" className='logo'/>
            </Link>

            <div className="navbar-collapse d-flex justify-content-between align-items-center">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active":""}`}
                        to="/pokemons"
                    >
                        Pokemons
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? "active":""}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
                <div className="d-flex align-items-center">
                    <div className="container__social__media">
                        <a className="social__media">
                            <ImLinkedin2 className='icon__social'/>
                        </a>
                        <a className="social__media">
                            <BsGithub className='icon__social'/>
                        </a>
                        <a className="social__media">
                            <BsGlobe2 className='icon__social'/>
                        </a>
                    </div>
                    <label htmlFor="" className='switch'>
                        <input type="checkbox"/>
                        <span onClick={toggle} className={`slider round`}></span>
                        
                    </label>
                </div>
            </div>
        </nav>
    )
}
